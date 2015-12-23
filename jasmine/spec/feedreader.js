/* feedreader.js */

$(function() {

    describe('RSS Feeds', function() {
        /* allFeeds variable defined and not empty */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* each feed in allFeeds has a URL and it is not empty */
         it('have an URL and it is not empty', function(){
             for(var i = 0; i < allFeeds.length; i++){
                 expect(allFeeds[i].url).toBeDefined();
                 expect(allFeeds[i].url.length).not.toBe(0);
             }
         });

         /* each feed in allFeeds has a name and it is not empty */
         it('have name and it is not empty', function(){
             for(var i = 0; i < allFeeds.length; i++){
                 expect(allFeeds[i].name).toBeDefined();
                 expect(allFeeds[i].name.length).not.toBe(0);
             }
         });
    });


    describe('The menu', function() {
         /* the menu element is hidden by default */
         it('is hidden by default', function() {
             expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* the menu changes visibility when the menu icon is clicked */
          it('visibility changes when clicked', function() {
              var $menuLink = $('.menu-icon-link');
              $menuLink.click();
              expect($('body').hasClass('menu-hidden')).toBeFalsy();
              $menuLink.click();
              expect($('body').hasClass('menu-hidden')).toBeTruthy();
          });
    });

    describe('Initial Entries', function() {
        /* when loadFeed is called there is at least
         * a single .entry element within the .feed container
         */
         beforeEach(function(done) { loadFeed(0, done); });

         it('at least a single .entry element within the .feed container', function(done) {
             expect($(".feed .entry").length).toBeGreaterThan(0);
             done();
         })
    });

    describe('New Feed Selection', function() {
        /* when a new feed is loaded by loadFeed the content changes */
         var feedContent;

         beforeEach(function(done) {
                        loadFeed(1, function() {
                            feedContent0 = $('.feed').text();
                            done();
                        });
         });

         it('when a new feed is loaded the content changes', function(done) {
             loadFeed(2, function() {
                 expect(feedContent).not.toEqual($('.feed').text());
                 done();
             });
         });
    });
}());
