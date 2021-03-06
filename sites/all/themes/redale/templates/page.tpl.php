<?php

/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see template_process()
 * @see html.tpl.php
 *
 * @ingroup themeable
 */
?>

  <div id="page-wrapper">
    <div>
      <div>
        <div id="navigation">
          <div>
            <div>
                 <?php print render($page['navigation']); ?>
            </div>
          </div>
        </div>

        <div id="header">
          <div>
            <div>
                  <?php if ($logo): ?>
                    <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
                      <img src="<?php print $logo; ?>" onerror="src='/sites/default/files/redale_logo.png'; this.onerror='null'" alt="<?php print t('Home'); ?>" />
                    </a>
                  <?php endif; ?>
                  <?php print render($page['header']); ?>
                  <div class="clear">
                 </div>
            </div>
           </div>
        </div> <!-- /#header -->

        <?php if ($page['banner']): ?>
          <div id="Banner">
             <?php print render($page['banner']); ?>
          </div>
        <?php endif; 

      if(!empty($node) && $node->type=='projects'|| isset($node->field_title_sub_text1) || isset($node->field_images_title)){ ?>
         <div id="inner-banner">
            <?php 
            if (!empty($node) && $node->type=='projects' )
            { 
                $nodeType = substr($node->type,0);
                $field_text = field_get_items('node', $node, 'field_sub_text_projects');
                $subtext = field_view_value('node', $node, 'field_sub_text_projects', $field_text[0]);
                $field = field_get_items('node', $node, 'field_images_title_projects');
                $bannerImage = field_view_value('node', $node, 'field_images_title_projects', $field[0]);
            }
            else if(isset($node->field_title_sub_text1) || isset($node->field_images_title))
            {   
              
              
                $field_text = field_get_items('node', $node, 'field_title_sub_text1');
                $subtext = field_view_value('node', $node, 'field_title_sub_text1', $field_text[0]);
                $field = field_get_items('node', $node, 'field_images_title');
                $bannerImage = field_view_value('node', $node, 'field_images_title', $field[0]);
              
                
             }
             ?>
             <div id="header-text"><h1 class="title" id="page-title"><?php print $title; ?></h1>
              <div class="subtext"><?php print render($subtext); ?></div>
              </div>
              <?php 
              if(isset($node->field_images_title)|| isset($node->field_images_title_projects)): ?>
              <div id="header-image">
                  <?php 
                     print render($bannerImage);
                  ?>
              </div>
          </div>   
            <?php  endif; ?>
         
           <?php } else if($title){ ?> <div class="banner-basic-page"><div class="banner-content"><h1 class="title" id="page-title"><?php print $title; ?></h1> </div></div><?php  }
           ?>
        
         <?php if ($page['front-content']): ?>
          <div id="front-content">
             <?php print render($page['front-content']); ?>
          </div>
        <?php endif; ?>


        <div id="main-wrapper">
          <div>
            <div>
                <div id="content">
                    <div>
                      <div>
                      <a id="main-content"></a>
                      <?php print render($title_prefix); ?>

                      <?php print render($title_suffix); ?>
                      <?php print $messages; ?>
                      <?php if ($tabs): ?><div class="tabs"><?php print render($tabs); ?></div><?php endif; ?>
                      <?php print render($page['help']); ?>
                      <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
                      <?php print render($page['content']); ?>
                    </div>
                  </div>
                </div> <!-- /#content -->

                <?php if ($page['sidebar']): ?>
                  <div id="sidebar">
                    <div>
                      <div>
                           <?php print render($page['sidebar']); ?>
                      </div>
                     </div>
                   </div> <!-- /#sidebar -->
                <?php endif; ?>

                </div>
              </div>
        </div> <!-- /#main, /#main-wrapper -->

        <div id="widgets">
          <div>
            <div>
               <?php print render($page['widgets']); ?>
            </div>
          </div>
        </div>

        <div id="footer">
            <div>
                <div>
                    <?php print render($page['footer']); ?>
                    <div id="inner-footer">
                      <div id="copyright">Copyright <?php print date('Y'); ?> Robert E. Dale Limited. All Rights Reserved.
                      </div>
                      <div id="site-by-cci">Site by <a href="http://ccistudios.com" target="_blank">CCI Studios</a></div>
                    </div>
                </div>
            </div>
        </div> <!-- /#footer -->
      </div>
    </div>
</div> <!-- /#page-wrapper -->
