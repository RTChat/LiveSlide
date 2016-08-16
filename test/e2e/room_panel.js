
describe("RoomPanel", function() {

	beforeEach(function() {
		browser.get( browser.baseUrl + "#testing");
		browser.waitForRender();
	});

	describe("with a second user", function() {

		beforeEach(function() {
			browser2 = browser.fork();

			browser.wait(function() {
				return browser.$('#Header .viewers-count').isPresent() &&
					browser2.$('#RoomPanel div').isPresent()
			});

			// "one should be presenter & two should be viewer"
			expect(browser.$('#Header').isDisplayed()).toBe(true);
			expect(browser.$('#Sidebar').getAttribute('class')).toBe('open');

			expect(browser2.$('#Header').isDisplayed()).toBe(false);
			expect(browser2.$('#Sidebar').getAttribute('class')).toBe('');
		});

		afterEach(function() {
			browser2.quit();
		});

		it("should see the same presentation", function() {
			expect(browser.$( '#Viewer img').isPresent()).toBe(false)
			expect(browser2.$('#Viewer img').isPresent()).toBe(false)

			// Start
			browser.$$('#Sidebar .album li').get(1).click();
			browser2.wait(function() {
				return browser.$('#Viewer img').isPresent() &&
					browser2.$('#Viewer img').isPresent();
			});
			browser.waitConstant(200); //TODO: why?
			expect(browser.$( '#Viewer img').isDisplayed()).toBe(true);
			expect(browser2.$('#Viewer img').isDisplayed()).toBe(true);

			// Next
			browser.$('#Viewer .right.carousel-control').click();
			browser.waitConstant(2000); //animation
			expect(browser.$$( '#Viewer img').get(0).isDisplayed()).toBe(false);
			expect(browser2.$$('#Viewer img').get(0).isDisplayed()).toBe(false);
			expect(browser.$$( '#Viewer img').get(1).isDisplayed()).toBe(true);
			expect(browser2.$$('#Viewer img').get(1).isDisplayed()).toBe(true);

			// Select Page
			browser.$$('#Viewer .carousel-indicators li').get(4).click();
			browser.waitConstant(2000); //animation
			expect(browser.$$( '#Viewer img').get(1).isDisplayed()).toBe(false);
			expect(browser2.$$('#Viewer img').get(1).isDisplayed()).toBe(false);
			expect(browser.$$( '#Viewer img').get(4).isDisplayed()).toBe(true);
			expect(browser2.$$('#Viewer img').get(4).isDisplayed()).toBe(true);

			// Prev
			browser.$('#Viewer .left.carousel-control').click();
			browser.waitConstant(2000); //animation
			expect(browser.$$( '#Viewer img').get(4).isDisplayed()).toBe(false);
			expect(browser2.$$('#Viewer img').get(4).isDisplayed()).toBe(false);
			expect(browser.$$( '#Viewer img').get(3).isDisplayed()).toBe(true);
			expect(browser2.$$('#Viewer img').get(3).isDisplayed()).toBe(true);

			// Ping
			expect(browser.$( '#Viewer .ping').isDisplayed()).toBe(false);
			expect(browser2.$('#Viewer .ping').isDisplayed()).toBe(false);
			browser.$('#Header .ping').click();
			browser.$$('#Viewer img').get(3).click();
			browser.waitConstant(200); //animation
			expect(browser.$( '#Viewer .ping').isDisplayed()).toBe(true);
			expect(browser2.$('#Viewer .ping').isDisplayed()).toBe(true);

			// Stop
			expect(browser.$( '#RoomPanel .waiting-msg').isDisplayed()).toBe(false);
			expect(browser2.$('#RoomPanel .waiting-msg').isDisplayed()).toBe(false);
			browser.$('#Header .stop').click();
			browser.waitConstant(1200); //animation
			expect(browser.$( '#Viewer img').isPresent()).toBe(false);
			expect(browser2.$('#Viewer img').isPresent()).toBe(false);

			expect(browser.$( '#RoomPanel .waiting-msg').isDisplayed()).toBe(true);
			expect(browser2.$('#RoomPanel .waiting-msg').isDisplayed()).toBe(true);

			// browser.pause();
		});

		//TODO:
		// it("Should chat with eachother", function() {
		// browser.$('.emojionearea-editor').sendKeys("I'm number one! :cat:\n\n");

		// 	browser.wait(function() {
		// 		return browser.$$('#ChatPanel li').get(0).getAttribute('innerHTML').toMatch("I'm number one!") &&
		// 		      browser2.$$('#ChatPanel li').get(0).getAttribute('innerHTML').toMatch("I'm number one!");
		// 	});

		// 	browser2.$('.emojionearea-editor').sendKeys("I'm number two! :cat2:\n\n");

		// 	browser.wait(function() {
		// 		return browser.$$('#ChatPanel li').get(1).getAttribute('innerHTML').toMatch("I'm number two!") &&
		// 		      browser2.$$('#ChatPanel li').get(1).getAttribute('innerHTML').toMatch("I'm number two!");
		// 	});
		// });
	});
});