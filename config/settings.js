var settings = {
	appName: 'reviens',
	environment: {
		dev: {
			datahostname : "reviens.dev"
		},
		stage: {
			datahostname : "reviens.fr"
		},
		prod: {
			datahostname : "reviens.fr"
		}
	},
	plugins: [
    	{"org.apache.cordova.console": "https://git-wip-us.apache.org/repos/asf/cordova-plugin-console.git"},
    	{"org.apache.cordova.splashscreen": "https://github.com/apache/cordova-plugin-splashscreen.git"}
	],
	plist: {
		"UISupportedInterfaceOrientations": [
			"UIInterfaceOrientationPortrait",
			"UIInterfaceOrientationLandscapeLeft",
			"UIInterfaceOrientationPortraitUpsideDown",
			"UIInterfaceOrientationLandscapeRight"
		],
		"UISupportedInterfaceOrientations~ipad": [
  			"UIInterfaceOrientationPortrait",
			"UIInterfaceOrientationLandscapeLeft",
			"UIInterfaceOrientationPortraitUpsideDown",
			"UIInterfaceOrientationLandscapeRight"
		],
		"UIStatusBarStyle": "UIStatusBarStyleLightContent",
		"UIViewControllerBasedStatusBarAppearance": false,
		"UIStatusBarHidden": true
	}
};

module.exports = settings;