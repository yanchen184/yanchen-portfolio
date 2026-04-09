export function useScrollTo() {
  function scrollTo(elementId: string): void {
    const el = document.getElementById(elementId)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return { scrollTo }
}
