/**
 * Construct asset paths that work with GitHub Pages basePath.
 * When deployed at andysalvo.github.io/appliedai/, assets need the prefix.
 */
export function assetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${basePath}${path}`
}
