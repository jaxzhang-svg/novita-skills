/**
 * Field filtering engine for API responses
 *
 * This module provides functionality to filter and extract specific fields
 * from API responses, reducing token usage and improving readability.
 */

type FilterData = Record<string, unknown> | Record<string, unknown>[];

/**
 * Get a nested field value using dot notation
 */
export function getNestedField(data: Record<string, unknown>, fieldPath: string): unknown {
  if (!fieldPath || typeof data !== "object" || data === null) {
    return null;
  }

  const parts = fieldPath.split(".");
  let current: unknown = data;

  for (const part of parts) {
    if (typeof current !== "object" || current === null) {
      return null;
    }
    current = (current as Record<string, unknown>)[part];
    if (current === undefined) {
      return null;
    }
  }

  return current;
}

/**
 * Set a nested field value using dot notation
 */
export function setNestedField(data: Record<string, unknown>, fieldPath: string, value: unknown): void {
  if (!fieldPath) {
    return;
  }

  const parts = fieldPath.split(".");
  let current = data;

  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (!(part in current) || typeof current[part] !== "object") {
      current[part] = {};
    }
    current = current[part] as Record<string, unknown>;
  }

  current[parts[parts.length - 1]] = value;
}

/**
 * Filter data to include only specified fields
 */
export function filterFields(
  data: FilterData,
  fields: string[],
  preserveStructure = true,
): FilterData {
  if (fields.length === 0) {
    throw new Error("fields list cannot be empty");
  }

  // Handle list input
  if (Array.isArray(data)) {
    return data.map((item) =>
      filterFields(item as Record<string, unknown>, fields, preserveStructure)
    ) as FilterData;
  }

  if (typeof data !== "object" || data === null) {
    return data;
  }

  const result: Record<string, unknown> = {};

  for (const field of fields) {
    // Handle nested field paths
    if (field.includes(".")) {
      const value = getNestedField(data, field);
      if (value !== null && value !== undefined) {
        if (preserveStructure) {
          setNestedField(result, field, value);
        } else {
          // Flatten: use full path as key
          result[field] = value;
        }
      }
    } else {
      // Top-level field
      if (field in data) {
        result[field] = data[field];
      }
    }
  }

  return result;
}

/**
 * Filter a list of dictionaries
 */
export function filterList(
  dataList: Record<string, unknown>[],
  fields: string[],
  preserveStructure = true,
): Record<string, unknown>[] {
  return filterFields(dataList, fields, preserveStructure) as Record<string, unknown>[];
}

/**
 * Merge multiple field sets, removing duplicates while preserving order
 */
export function mergeFields(...fieldSets: string[][]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const fieldSet of fieldSets) {
    for (const field of fieldSet) {
      if (!seen.has(field)) {
        seen.add(field);
        result.push(field);
      }
    }
  }

  return result;
}

/**
 * Remove specified fields from data
 */
export function excludeFields(
  data: Record<string, unknown>,
  exclude: string[],
): Record<string, unknown> {
  if (exclude.length === 0) {
    return data;
  }

  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(data)) {
    if (!exclude.includes(key)) {
      result[key] = value;
    }
  }
  return result;
}
