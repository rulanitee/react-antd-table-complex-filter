export function SubjectClass(subject?: string): string {
  if (!subject) return "";
  return `subject-${subject.toLowerCase().trim()}`;
}
