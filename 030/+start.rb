# change to script
Dir.chdir File.expand_path(File.dirname(__FILE__))
# run compass compiler
Kernel.exec('compass watch -c +compass.rb')