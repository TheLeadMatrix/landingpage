export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-display text-xl font-bold text-foreground">
              YourLeadMatrix
            </span>
            <p className="text-sm text-muted-foreground">
              AI-powered SEO agents for modern businesses
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How it Works
            </a>
            <a
              href="#results"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Results
            </a>
            <a
              href="#articles"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Articles
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} YourLeadMatrix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
