require 'nokogiri'


BASE = ARGV[0]
def find_html_link
	htmls = Dir.glob("*.html")
	ss = []
	htmls.each do |e|
		f = File.read e
		doc = Nokogiri(f)
		links = doc/"a"
		#p links.collect{|e| e.attr('href') }.join(",")
		pages  = links.collect{|e| 
			href = e.attr("href")
			href =~ /html/ ? href : nil
			href = nil if href =~ /http/
			href
		}.compact
		ss += pages
	end
	ss
end

def find_js_link
	htmls = Dir.glob("*.html")
	ss = []
	htmls.each do |e|
		f = File.read e
		doc = Nokogiri(f)
		links = doc/"script"
		#p links.collect{|e| e.attr('href') }.join(",")
		pages  = links.collect{|e| 
			src = e.attr("src")
			src =~ /js/ ? src : nil
			src = nil if src =~ /http/
			src
		}.compact
		ss += pages
	end
	ss
end

def find_img_link
	htmls = Dir.glob("*.html")
	ss = []
	htmls.each do |e|
		f = File.read e
		doc = Nokogiri(f)
		links = doc/"img"
		#p links.collect{|e| e.attr('href') }.join(",")
		pages  = links.collect{|e| 
			src = e.attr("src")
			src = nil if src =~ /http/
			src
		}.compact
		ss += pages
	end
	ss
end

def find_css_link
	htmls = Dir.glob("*.html")
	ss = []
	htmls.each do |e|
		f = File.read e
		doc = Nokogiri(f)
		links = doc/"link"
		pages  = links.collect{|e| 
			src = e.attr("href")
			src =~ /css/ ? src : nil
		}.compact
		ss += pages
	end
	ss.compact.uniq
end

def download_file(arr)
	arr.compact.uniq.each do |file|
		if file =~ /http/
			url = file
		else
			url = "#{BASE}#{file}"
		end
		dirs = file.split('/')[0..-2].join("/")
		if dirs == ""
			system("wget #{url}")
		else
			system("mkdir -p #{dirs};cd #{dirs};wget #{url}")
		end
		
		filename = file.split("/").last
		if file =~ /html/ 
			system("js-beautify -f #{filename} -o #{filename}")
		elsif file =~ /css/
			system("cd #{dirs};js-beautify -f #{filename} -o #{filename}")
		end
	end
end

def run_html
	arr = find_html_link
	download_file(arr)
end

def run_css
	arr = find_css_link
	download_file(arr)
end

def run_js
  arr = find_js_link
	download_file(arr)
end

def run_img
	arr = find_img_link
	download_file(arr)
end


run_html
run_css
run_js
run_img
