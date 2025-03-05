source "https://rubygems.org"
ruby '~> 3.1.3'

gem "jekyll", "4.3.3"
gem "execjs", "2.7.0" # https://github.com/rails/execjs/issues/99
gem "autoprefixer-rails"
gem 'eventmachine', '1.2.7', git: 'https://github.com/eventmachine/eventmachine.git', tag: 'v1.2.7'

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.15"
  gem 'jekyll-redirect-from'
  gem 'jekyll-paginate-v2', "3.0.0"
  gem 'jekyll-sitemap'
  gem 'jekyll-seo-tag'
end
gem 'jekyll-liquify', "0.0.2"
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

gem "html-proofer", "~> 5"

gem "webrick", "~> 1.8"

gem 'jekyll-sass-converter', '~> 3.0'
