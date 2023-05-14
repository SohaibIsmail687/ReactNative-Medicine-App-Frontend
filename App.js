import React from 'react';
import {Text} from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';
import addblog from './screens/addblog';
import myblog from './screens/myblog';
import addMedicine from './screens/addMedicine';
import appointment from './screens/appointment';
import articles from './screens/articles';
import articles2 from './screens/articles2';
import articles3 from './screens/articles3';
import diagnosis from './screens/diagnosis';
import history from './screens/history';
import information from './screens/information';
import NearestPharmacies from './screens/NearestPharmacies';
import PharmacieHamdallaye from './screens/PharmacieHamdallaye';
import Pills from './screens/pills';
import prescription from './screens/prescription';
import Drawer_Screen from './screens/Drawer_Screen';

export default function App() {
  return (
    <Router>
      <Stack key="root">
        <Scene
          key="addblog"
          component={addblog}
          title="addblog"
          hideNavBar={true}
          // initial
        />
        <Scene
          key="myblog"
          component={myblog}
          title="myblog"
          hideNavBar={true}
          // initial
        />
        <Scene
          key="addMedicine"
          component={addMedicine}
          title="addMedicine"
          hideNavBar={true}
          // initial
        />
        <Scene
          key="appointment"
          component={appointment}
          title="appointment"
          hideNavBar={true}
          // initial
        />
        <Scene
          key="articles"
          component={articles}
          title="articles"
          hideNavBar={true}
          // initial
        />
        <Scene
          key="articles2"
          component={articles2}
          title="articles2"
          hideNavBar={true}
          // initial
        />
        <Scene
          key="articles3"
          component={articles3}
          title="articles3"
          hideNavBar={true}
          // initial
        />
        <Scene
          key="diagnosis"
          component={diagnosis}
          title="diagnosis"
          hideNavBar={true}
          // initial
        />
        <Scene
          key="history"
          component={history}
          title="history"
          hideNavBar={true}
          // initial
        />
        <Scene
          key="information"
          component={information}
          title="information"
          hideNavBar={true}
          // initial
        />
        <Scene
          key="NearestPharmacies"
          component={NearestPharmacies}
          title="NearestPharmacies"
          hideNavBar={true}
          // initial
        />
        <Scene
          key="PharmacieHamdallaye"
          component={PharmacieHamdallaye}
          title="PharmacieHamdallaye"
          hideNavBar={true}
          // initial
        />
        <Scene
          key="Pills"
          component={Pills}
          title="Pills"
          hideNavBar={true}
          // initial
        />
        <Scene
          key="prescription"
          component={prescription}
          title="prescription"
          hideNavBar={true}
          initial
        />
         <Scene
          key="Drawer_Screen"
          component={Drawer_Screen}
          title="Drawer_Screen"
          hideNavBar={true}
          initial
        />
      </Stack>
    </Router>
  );
}
