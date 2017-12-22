#!/usr/bin/env ruby

require 'json'

["public/images/weapons"].each { |d|
  Dir.chdir(d) do
    File.open("manifest.json", "w") {|f| f.write(Dir["*.png","*.jp*g"].to_json) }
  end
}
