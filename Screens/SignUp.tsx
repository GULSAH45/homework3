import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, Text, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { MaskedTextInput } from 'react-native-mask-text';
import * as ImagePicker from 'expo-image-picker';

const SignUp = ({ type, textName }: { type: string; textName: string }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
      phone: '',
      name: '',
      surname: '',
      profileImage: '',
    },
  });

  const onSubmit = async (data: any) => {
    console.log('Form Data: ', data);
  };

  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View>
      <Controller
        name="email"
        control={control}
        render={({ field: { value, onChange } }) => (
          <TextInput
            style={{
              margin: 20,
              borderRadius: 8,
              borderWidth: 2,
              borderColor: 'gray',
              backgroundColor: '#57cc99',
              padding: 20,
            }}
            placeholder="Email"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field: { value, onChange } }) => (
          <TextInput
            style={{
              margin: 20,
              borderRadius: 8,
              borderWidth: 2,
              borderColor: 'gray',
              backgroundColor: '#57cc99',
              padding: 20,
            }}
            placeholder="Password"
            secureTextEntry
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Controller
        name="phone"
        control={control}
        render={({ field: { value, onChange } }) => (
          <MaskedTextInput
            mask="(99)999 99 99"
            style={{
              margin: 20,
              borderRadius: 8,
              borderWidth: 2,
              borderColor: 'gray',
              backgroundColor: '#57cc99',
              padding: 20,
            }}
            placeholder="Telefon"
            value={value}
            onChangeText={onChange}
            keyboardType="numeric"
          />
        )}
      />

      <View style={{ flexDirection: 'row' }}>
        <Controller
          name="name"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextInput
              style={{
                flex: 1,
                margin: 10,
                borderRadius: 8,
                borderWidth: 2,
                borderColor: 'gray',
                backgroundColor: 'red',
                padding: 20,
              }}
              placeholder="Ad"
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        <Controller
          name="surname"
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextInput
              style={{
                flex: 1,
                margin: 10,
                borderRadius: 8,
                borderWidth: 2,
                borderColor: 'gray',
                backgroundColor: '#38a3a5',
                padding: 20,
              }}
              placeholder="Soyad"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
      </View>

      <View className="mt-6 items-center justify-center">
        {' '}
        <TouchableOpacity
          onPress={pickImage}
          className="align-items-center aspect-square w-[120px] items-center rounded-full rounded-xl bg-rose-300">
          {image ? (
            <Image
              source={{ uri: image }}
              className="aspect-square w-[120px] rounded-full"
              resizeMode="cover"
            />
          ) : (
            <Text className="align-middle">a</Text>
          )}
        </TouchableOpacity>
      </View>
      <View className="m-7 rounded-full bg-gray-50 p-6 ">
        <TouchableOpacity onPress={handleSubmit(onSubmit)} className="items-center justify-center">
          {' '}
          <Text className="text-center">OK</Text> OK
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
