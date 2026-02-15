import type { Department } from "../schemas/department";

let deptCache: Department[] | null = null;

export async function getAllDepartments(): Promise<Department[]> {
  if (deptCache) return deptCache;

  const data = await import("../data/departments.json");
  deptCache = data.default as Department[];
  return deptCache;
}

export async function getDepartmentBySlug(slug: string): Promise<Department | undefined> {
  const depts = await getAllDepartments();
  return depts.find((d) => d.slug === slug);
}

export async function getDepartmentByNumber(num: string): Promise<Department | undefined> {
  const depts = await getAllDepartments();
  return depts.find((d) => d.number === num);
}
