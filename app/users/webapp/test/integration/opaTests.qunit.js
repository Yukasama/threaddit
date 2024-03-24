sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'users/test/integration/FirstJourney',
		'users/test/integration/pages/UsersMain'
    ],
    function(JourneyRunner, opaJourney, UsersMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('users') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheUsersMain: UsersMain
                }
            },
            opaJourney.run
        );
    }
);