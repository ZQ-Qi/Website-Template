<?php require 'inc/_global/config.php'; ?>
<?php require 'inc/_global/views/head_start.php'; ?>
<?php require 'inc/_global/views/head_end.php'; ?>
<?php require 'inc/_global/views/page_start.php'; ?>

<!-- Hero -->
<div class="bg-image" style="background-image: url('<?php echo $cb->assets_folder; ?>/img/photos/bg_hero_landing.jpg');">
    <div class="hero bg-black-op">
        <div class="hero-inner">
            <div class="content content-full text-center">
                <h1 class="display-3 font-w700 text-white mb-10 invisible" data-toggle="appear" data-class="animated fadeInDown">
                    <i class="si si-fire font-size-h1 text-primary"></i> code<span class="text-primary">base</span>
                </h1>
                <h2 class="font-w400 text-white-op mb-50 invisible" data-toggle="appear" data-class="animated fadeInDown">Visualize your goals. Then build your future.</h2>
                <a class="btn btn-hero btn-noborder btn-rounded btn-success mb-10 invisible" data-toggle="appear" href="https://goo.gl/po9Usv">
                    <i class="fa fa-shopping-bag mr-10"></i> Purchase
                </a>
                <a class="btn btn-hero btn-noborder btn-rounded btn-alt-primary mb-10 invisible" data-toggle="appear" href="be_pages_dashboard.php">
                    <i class="si si-rocket mr-5"></i> Live Preview
                </a>
            </div>
        </div>
    </div>
</div>
<!-- END Hero -->

<!-- Feature: Powerful Layout -->
<div class="bg-white">
    <div class="content">
        <div class="pt-100 pb-50">
            <h3 class="h1 font-w700 text-center mb-10">
                Powerful <span class="text-primary">Layout</span>
            </h3>
            <h4 class="h3 font-w400 text-muted text-center mb-30">One super flexible and reusable layout.</h4>
            <hr>
            <div class="row nice-copy my-10">
                <div class="col-md-4 py-20">
                    <h4 class="font-size-xl font-w700 text-uppercase mb-10">
                        <i class="fa fa-circle-o text-elegance mr-5"></i> Unity
                    </h4>
                    <p class="mb-0">Codebase’s layout is really unique, adaptive and flexible. It enables you to create all kinds of pages that look great and work seamlessly across mobile and desktop devices.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-xl font-w700 text-uppercase mb-10">
                        <i class="fa fa-refresh text-earth mr-5"></i> Reusability
                    </h4>
                    <p class="mb-0">It is the core principle we followed to create a layout that can work for different purposes with the minimum cost. That means fast and responsive layouts with limitless possibilities.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-xl font-w700 text-uppercase mb-10">
                        <i class="fa fa-bolt text-danger mr-5"></i> Flexibility
                    </h4>
                    <p class="mb-0">It is based on various layout & UI components which work together harmoniously to help you create what you imagine. Lots of boilerplate pages to help you started are included.</p>
                </div>
            </div>
        </div>
        <div class="row no-gutters pull-b text-center overflow-hidden">
            <div class="col-4 invisible" data-toggle="appear" data-class="animated fadeInUp" data-offset="-200">
                <a class="options-container" href="be_pages_dashboard.php">
                    <img class="img-fluid options-item" src="<?php echo $cb->assets_folder; ?>/img/various/landing-promo-layout-backend.png" srcset="<?php echo $cb->assets_folder; ?>/img/various/landing-promo-layout-backend@2x.png 2x" alt="Backend Promo">
                    <div class="options-overlay bg-white">
                        <div class="options-overlay-content">
                            <h3 class="h5 font-w700 text-uppercase mb-5">
                                Explore <span class="text-primary">Backend</span>
                            </h3>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-4 invisible" data-toggle="appear" data-class="animated fadeInUp" data-offset="-200">
                <a class="options-container" href="bd_dashboard.php">
                    <img class="img-fluid options-item" src="<?php echo $cb->assets_folder; ?>/img/various/landing-promo-layout-boxed-backend.png" srcset="<?php echo $cb->assets_folder; ?>/img/various/landing-promo-layout-boxed-backend@2x.png 2x" alt="Boxed Backend Promo">
                    <div class="options-overlay bg-white">
                        <div class="options-overlay-content">
                            <h3 class="h5 font-w700 text-uppercase mb-5">
                                Explore <span class="text-primary">Boxed Backend</span>
                            </h3>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-4 invisible" data-toggle="appear" data-class="animated fadeInUp" data-offset="-200">
                <a class="options-container" href="be_layout_api.php">
                    <img class="img-fluid options-item" src="<?php echo $cb->assets_folder; ?>/img/various/landing-promo-layout-api.png" srcset="<?php echo $cb->assets_folder; ?>/img/various/landing-promo-layout-api@2x.png 2x" alt="Layout API Promo">
                    <div class="options-overlay bg-white">
                        <div class="options-overlay-content">
                            <h3 class="h5 font-w700 text-uppercase mb-5">
                                Explore <span class="text-primary">Layout</span>
                            </h3>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
<!-- END Feature: Powerful Layout -->

<!-- Feature: Bootstrap 4 -->
<div class="bg-body-light">
    <div class="content content-full">
        <div class="pt-100 pb-50">
            <h3 class="h1 font-w700 text-center mb-10">
                Bootstrap <span class="text-primary">4</span>
            </h3>
            <h4 class="h3 font-w400 text-muted text-center mb-30">Based on the new version of the most popular HTML, CSS, and JS framework.</h4>
            <hr>
            <div class="row nice-copy my-10">
                <div class="col-md-4 py-20">
                    <h4 class="font-size-xl font-w700 text-uppercase mb-10">
                        <i class="fa fa-leaf text-success mr-5"></i> Fresh
                    </h4>
                    <p class="mb-0">The newest Bootstrap version is a major rewrite of almost the entire project and comes packed with lots of changes and features that make it the coolest release till now.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-xl font-w700 text-uppercase mb-10">
                        <i class="fa fa-expand text-warning mr-5"></i> Flexbox
                    </h4>
                    <p class="mb-0">Flexbox is now the default layout module used throughout the Bootstrap framework. Due to this feature, creating complex layouts and aligning elements is now easier than ever.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-xl font-w700 text-uppercase mb-10">
                        <i class="fa fa-rocket text-corporate mr-5"></i> Features
                    </h4>
                    <p class="mb-0">From Sass to Typography, from new UI Components to the revamped Grid, Bootstrap 4 features lots of new additions and improvements under the hood.</p>
                </div>
            </div>
        </div>
        <div class="row no-gutters pull-b text-center overflow-hidden">
            <div class="col-4 invisible" data-toggle="appear" data-class="animated fadeInUp" data-offset="-200">
                <a class="options-container" href="be_ui_grid.php">
                    <img class="img-fluid options-item" src="<?php echo $cb->assets_folder; ?>/img/various/landing-promo-bootstrap4-grid.png" srcset="<?php echo $cb->assets_folder; ?>/img/various/landing-promo-bootstrap4-grid@2x.png 2x" alt="Bootstrap 4 Grid Promo">
                    <div class="options-overlay bg-body-light">
                        <div class="options-overlay-content">
                            <h3 class="h5 font-w700 text-uppercase mb-5">
                                Explore
                                <span class="text-primary">Grid</span>
                            </h3>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-4 invisible" data-toggle="appear" data-class="animated fadeInUp" data-offset="-200">
                <a class="options-container" href="be_ui_typography.php">
                    <img class="img-fluid options-item" src="<?php echo $cb->assets_folder; ?>/img/various/landing-promo-bootstrap4-typography.png" srcset="<?php echo $cb->assets_folder; ?>/img/various/landing-promo-bootstrap4-typography@2x.png 2x" alt="Bootstrap 4 Typography Promo">
                    <div class="options-overlay bg-body-light">
                        <div class="options-overlay-content">
                            <h3 class="h5 font-w700 text-uppercase mb-5">
                                Explore
                                <span class="text-primary">Typography</span>
                            </h3>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-4 invisible" data-toggle="appear" data-class="animated fadeInUp" data-offset="-200">
                <a class="options-container" href="be_ui_buttons.php">
                    <img class="img-fluid options-item" src="<?php echo $cb->assets_folder; ?>/img/various/landing-promo-bootstrap4-buttons.png" srcset="<?php echo $cb->assets_folder; ?>/img/various/landing-promo-bootstrap4-buttons@2x.png 2x" alt="Bootstrap 4 Buttons Promo">
                    <div class="options-overlay bg-body-light">
                        <div class="options-overlay-content">
                            <h3 class="h5 font-w700 text-uppercase mb-5">
                                Explore
                                <span class="text-primary">Buttons</span>
                            </h3>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
<!-- END Feature: Bootstrap 4 -->

<!-- Feature: Smart Tools -->
<div class="bg-white">
    <div class="content content-full">
        <div class="pt-100 pb-50">
            <h3 class="h1 font-w700 text-center mb-10">
                Smart <span class="text-primary">Tools</span>
            </h3>
            <h4 class="h3 font-w400 text-muted text-center mb-30">Make your life easier and work more efficiently.</h4>
            <hr>
            <div class="row nice-copy my-10">
                <div class="col-md-4 py-20">
                    <h4 class="font-size-xl font-w700 text-uppercase mb-10">
                        <i class="fa fa-cogs text-elegance mr-5"></i> Preprocessor
                    </h4>
                    <p class="mb-0">Codebase CSS framework was built with Sass following a completely modular approach. It is easy to understand, customize and extend to fulfill your needs or project’s requirements.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-xl font-w700 text-uppercase mb-10">
                        <i class="fa fa-terminal text-info mr-5"></i> Live Compile
                    </h4>
                    <p class="mb-0">Smart tasks will live compile your Sass to CSS while you work and auto add any required browser prefixes. It makes it so easy to add your own styles without worrying about missing something.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-xl font-w700 text-uppercase mb-10">
                        <i class="fa fa-dot-circle-o text-danger mr-5"></i> Build
                    </h4>
                    <p class="mb-0">Time-saving task that will build a custom, minimized and production ready Codebase framework for you. Create your own variation based on your project.</p>
                </div>
            </div>
        </div>
        <div class="row no-gutters justify-content-center pull-b text-center overflow-hidden">
            <div class="col-sm-6 invisible" data-toggle="appear" data-class="animated zoomIn">
                <img class="img-fluid" src="<?php echo $cb->assets_folder; ?>/img/various/landing-promo-smart-tools.png" srcset="<?php echo $cb->assets_folder; ?>/img/various/landing-promo-smart-tools@2x.png 2x" alt="Smart Tools Promo">
            </div>
        </div>
    </div>
</div>
<!-- END Feature: Smart Tools -->

<!-- Feature: Developer Minded -->
<div class="bg-body-light">
    <div class="content content-full">
        <div class="pt-100 pb-50">
            <h3 class="h1 font-w700 text-center mb-10">
                Developer <span class="text-primary">Minded</span>
            </h3>
            <h4 class="h3 font-w400 text-muted text-center mb-30">We built Codebase based on your valuable feedback.</h4>
            <hr>
            <div class="row nice-copy my-10">
                <div class="col-md-4 py-20">
                    <h4 class="font-size-xl font-w700 text-uppercase mb-10">
                        <i class="fa fa-bullhorn text-danger mr-5"></i> Feedback
                    </h4>
                    <p class="mb-0">We get to know you better by continuously listening to your feedback. This way, we learn where to focus our efforts and build/improve quality products to better match your needs.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-xl font-w700 text-uppercase mb-10">
                        <i class="fa fa-code text-elegance mr-5"></i> Clean Code
                    </h4>
                    <p class="mb-0">Working with someone else’s code can become uncomfortable and make you unproductive. We strive to ensure that your experience with Codebase will be the exact opposite.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-xl font-w700 text-uppercase mb-10">
                        <i class="fa fa-book text-info mr-5"></i> Documentation
                    </h4>
                    <p class="mb-0">In the package, you will find the Codebase Docs which can become a valuable tool in getting familiar with the overall structure and helping you start your project faster.</p>
                </div>
            </div>
        </div>
        <div class="row no-gutters pull-b text-center overflow-hidden">
            <div class="col-4 invisible" data-toggle="appear" data-class="animated fadeInUp" data-offset="-200" data-timeout="250">
                <img class="img-fluid" src="<?php echo $cb->assets_folder; ?>/img/various/landing-promo-developer-minded-php.png" srcset="<?php echo $cb->assets_folder; ?>/img/various/landing-promo-developer-minded-php@2x.png 2x" alt="Developer Minded PHP Promo">
            </div>
            <div class="col-4 invisible" data-toggle="appear" data-class="animated fadeInUp" data-offset="-200">
                <img class="img-fluid" src="<?php echo $cb->assets_folder; ?>/img/various/landing-promo-developer-minded-docs.png" srcset="<?php echo $cb->assets_folder; ?>/img/various/landing-promo-developer-minded-docs@2x.png 2x" alt="Developer Minded Docs Promo">
            </div>
            <div class="col-4 invisible" data-toggle="appear" data-class="animated fadeInUp" data-offset="-200" data-timeout="500">
                <img class="img-fluid" src="<?php echo $cb->assets_folder; ?>/img/various/landing-promo-developer-minded-html.png" srcset="<?php echo $cb->assets_folder; ?>/img/various/landing-promo-developer-minded-html@2x.png 2x" alt="Developer Minded HTML Promo">
            </div>
        </div>
    </div>
</div>
<!-- END Feature: Developer Minded -->

<!-- Feature: Handcrafted Design -->
<div class="bg-white">
    <div class="content content-full">
        <div class="pt-100 pb-50">
            <h3 class="h1 font-w700 text-center mb-10">
                Handcrafted <span class="text-primary">Design</span>
            </h3>
            <h4 class="h3 font-w400 text-muted text-center mb-30">It’s not only about quantity, it’s about quality first and foremost.</h4>
            <hr>
            <div class="row nice-copy py-10">
                <div class="col-md-4 py-20">
                    <h4 class="font-size-xl font-w700 text-uppercase mb-10">
                        <i class="fa fa-heart text-pulse mr-5"></i> Passion
                    </h4>
                    <p class="mb-0">We are passionate with what we do and love crafting products that can make your life easier and help you succeed. We pay attention to small details and always aiming for the best.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-xl font-w700 text-uppercase mb-10">
                        <i class="fa fa-compress text-corporate mr-5"></i> Commitment
                    </h4>
                    <p class="mb-0">We are committed to our work and stand by our projects. Our aim is to improve them in every update and offer the most full-featured packages with the smallest possible footprint.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-xl font-w700 text-uppercase mb-10">
                        <i class="fa fa-circle-thin text-gray mr-5"></i> Less is More
                    </h4>
                    <p class="mb-0">We believe that design should be invisible and enhance the user experience, not get in the way. This gives room for your content to breath and attracts your users’ attention to the right place.</p>
                </div>
            </div>
        </div>
        <div class="row text-center">
            <div class="col-4 col-md-2 py-30 invisible" data-toggle="appear" data-class="animated bounceIn">
                <div class="item item-circle mx-auto">
                    <i class="si si-heart text-pulse"></i>
                </div>
                <div class="font-w600">Passion</div>
            </div>
            <div class="col-4 col-md-2 py-30 invisible" data-toggle="appear" data-class="animated bounceIn" data-timeout="150">
                <div class="item item-circle mx-auto">
                    <i class="si si-chemistry text-elegance"></i>
                </div>
                <div class="font-w600">Creativity</div>
            </div>
            <div class="col-4 col-md-2 py-30 invisible" data-toggle="appear" data-class="animated bounceIn" data-timeout="300">
                <div class="item item-circle mx-auto">
                    <i class="si si-vector text-default"></i>
                </div>
                <div class="font-w600">Design</div>
            </div>
            <div class="col-4 col-md-2 py-30 invisible" data-toggle="appear" data-class="animated bounceIn" data-timeout="450">
                <div class="item item-circle mx-auto">
                    <i class="si si-badge text-warning"></i>
                </div>
                <div class="font-w600">Quality</div>
            </div>
            <div class="col-4 col-md-2 py-30 invisible" data-toggle="appear" data-class="animated bounceIn" data-timeout="600">
                <div class="item item-circle mx-auto">
                    <i class="si si-energy text-pulse"></i>
                </div>
                <div class="font-w600">Simplicity</div>
            </div>
            <div class="col-4 col-md-2 py-30 invisible" data-toggle="appear" data-class="animated bounceIn" data-timeout="750">
                <div class="item item-circle mx-auto">
                    <i class="si si-compass text-success"></i>
                </div>
                <div class="font-w600">Motivation</div>
            </div>
        </div>
    </div>
</div>
<!-- END Feature: Handcrafted Design -->

<!-- Features -->
<div class="bg-body-light">
    <div class="content content-full">
        <div class="pt-100 pb-50">
            <h3 class="h1 font-w700 text-center mb-10">
                Feature <span class="text-primary">Rich</span>
            </h3>
            <h4 class="h3 font-w400 text-muted text-center mb-30">Extra care and thought were put into each and every one.</h4>
            <hr>
            <div class="row nice-copy py-10">
                <div class="col-md-4 py-20">
                    <h4 class="font-size-lg font-w700 text-uppercase mb-5">HTML5 &amp; CSS3</h4>
                    <p class="mb-0">Using the latest technologies, following the best practices. W3C valid code.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-lg font-w700 text-uppercase mb-5">Fully Responsive</h4>
                    <p class="mb-0">User Interface auto adjusts and looks great to any screen size.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-lg font-w700 text-uppercase mb-5">Retina Ready</h4>
                    <p class="mb-0">User Interface looks crispy clear on high resolution screens.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-lg font-w700 text-uppercase mb-5">Cross Browser Support</h4>
                    <p class="mb-0">It plays nice with all modern browsers including IE (10 and up).</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-lg font-w700 text-uppercase mb-5">Fast &amp; Lightweight</h4>
                    <p class="mb-0">It is created to be as fast and lightweight as possible. You can use only what you need.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-lg font-w700 text-uppercase mb-5">Custom JS APIs</h4>
                    <p class="mb-0">Powerful JavaScript APIs are included. Layout or blocks manipulation is just a JS call away.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-lg font-w700 text-uppercase mb-5">Get Started Version</h4>
                    <p class="mb-0">Simple version with boilerplate pages to help you rocket start your project.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-lg font-w700 text-uppercase mb-5">PHP Version</h4>
                    <p class="mb-0">A PHP version is included to assist you with your custom PHP project.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-lg font-w700 text-uppercase mb-5">HTML Version</h4>
                    <p class="mb-0">The generic and abstract version which can be used with any framework or language.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-lg font-w700 text-uppercase mb-5">RTL Support</h4>
                    <p class="mb-0">Boilerplate RTL pages are also included in 'Get Started' version providing a good starting point.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-lg font-w700 text-uppercase mb-5">Components</h4>
                    <p class="mb-0">Carefully picked and integrated to enhance and enrich your project with great functionality.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-lg font-w700 text-uppercase mb-5">6 Inspiring Color Themes</h4>
                    <p class="mb-0">Carefully chosen and integrated color themes to choose from for your website/dashboard.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-lg font-w700 text-uppercase mb-5">800+ Font Based Icons</h4>
                    <p class="mb-0">With so many unique icons included in Codebase, you don’t have to worry about running out.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-lg font-w700 text-uppercase mb-5">Super-Fast UI</h4>
                    <p class="mb-0">GPU powered sidebar animations and smart CSS styles will ensure a great experience.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-lg font-w700 text-uppercase mb-5">Flexible Side Areas</h4>
                    <p class="mb-0">Multiple available layouts and completely adjustable by using the powerful layout API.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-lg font-w700 text-uppercase mb-5">Designed Pages</h4>
                    <p class="mb-0">All kinds of pages, carefully designed, to get inspired and create your own.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-lg font-w700 text-uppercase mb-5">Gulp Tasks</h4>
                    <p class="mb-0">Time-saving tasks that will be a valuable tool to your workflow.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-lg font-w700 text-uppercase mb-5">Easy Updating</h4>
                    <p class="mb-0">Updating a template can be hard but if you follow the instructions you will be just a copy-paste away.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-lg font-w700 text-uppercase mb-5">Free Updates</h4>
                    <p class="mb-0">All updates are free for existing customers to download. Great new features at no extra cost.</p>
                </div>
                <div class="col-md-4 py-20">
                    <h4 class="font-size-lg font-w700 text-uppercase mb-5">Support</h4>
                    <p class="mb-0">By purchasing a license, you are eligible to email support. We are here to help!</p>
                </div>
                <div class="col-md-4 py-20 text-center text-md-left">
                    <h4 class="font-size-lg font-w700 text-uppercase mb-15">Many Many More..</h4>
                    <a class="btn btn-hero btn-sm btn-rounded btn-alt-primary" href="be_pages_dashboard.php">
                        <i class="fa fa-external-link-square mr-5"></i> Explore Codebase
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- END Features -->

<!-- Call to Action -->
<div class="bg-white">
    <div class="content content-full text-center overflow-hidden">
        <div class="py-100">
            <h3 class="font-w700 mb-10">
                Crafted with <i class="fa fa-heart text-danger"></i> by <a class="link-effect" href="http://goo.gl/vNS3I">pixelcave</a>
            </h3>
            <h4 class="font-w400 text-muted mb-30">Passionate web design and development since 2009.</h4>
            <a class="btn btn-hero btn-lg btn-noborder btn-rounded btn-alt-success mb-10 invisible" data-toggle="appear" data-class="animated zoomIn" href="https://goo.gl/po9Usv">
                <i class="fa fa-shopping-bag mr-10"></i> Purchase Codebase
            </a>
        </div>
    </div>
</div>
<!-- END Call to Action -->

<?php require 'inc/_global/views/page_end.php'; ?>
<?php require 'inc/_global/views/footer_start.php'; ?>
<?php require 'inc/_global/views/footer_end.php'; ?>
