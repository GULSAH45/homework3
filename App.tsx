import './global.css';
import { SafeAreaView, Text, TextInput } from 'react-native';

import SignUp from 'Screens/SignUp';
import MapSheet from 'components/mapSheet';

export default function App() {
  return (
    <>
      <SafeAreaView className="flex-1 bg-[#c7f9cc]">
        <SignUp type={''} textName={''} />
        <MapSheet />
      </SafeAreaView>
    </>
  );
}
