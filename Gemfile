source "https://rubygems.org"

# GitHub Pages metagem: pins the exact Jekyll + plugin versions GitHub builds
# with, so `bundle exec jekyll serve` locally matches the deployed site.
# It already bundles the plugins this site uses (jekyll-remote-theme,
# jekyll-feed, jekyll-paginate), so they don't need to be listed separately.
gem "github-pages", group: :jekyll_plugins

# Ruby 3.0+ no longer ships webrick, which `jekyll serve` needs to run locally.
gem "webrick", "~> 1.8"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem.
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows.
gem "wdm", "~> 0.1.0" if Gem.win_platform?
