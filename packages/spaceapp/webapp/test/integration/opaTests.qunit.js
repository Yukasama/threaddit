sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'spaceapp/test/integration/FirstJourney',
		'spaceapp/test/integration/pages/SpaceList',
		'spaceapp/test/integration/pages/SpaceObjectPage'
    ],
    function(JourneyRunner, opaJourney, SpaceList, SpaceObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('spaceapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSpaceList: SpaceList,
					onTheSpaceObjectPage: SpaceObjectPage
                }
            },
            opaJourney.run
        );
    }
);