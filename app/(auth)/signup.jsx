import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/dinetimelogo.png"
import entryImg from "../../assets/images/Frame.png"
import { StatusBar } from 'react-native';
import { Formik } from 'formik';
import { TextInput } from 'react-native';

const Signup = () => {

    const handleSignup = () => {

    }

    return (
        <SafeAreaView className={`bg-[#2b2b2b]`}>
            <ScrollView contentContainerStyle={{ height: '100%' }} >
                <View className="m-2 flex justify-center items-center">
                    <Image source={logo} style={{ height: 220, width: 300 }} />
                    <Text className="text-lg text-center text-white font-bold mb-10" >Let's get you started</Text>

                    <View className="w-5/6">
                        <Formik initialValues={{ email: "", password: "" }} validationSchema={""} onSubmit={handleSignup}>
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                <View className="w-full">
                                    <Text className="text-[#f49b33] mb-2 mt-4">Email</Text>
                                    <TextInput className="h-10 border border-white text-white rounded px-2" keyboardType='email-address' onChangeText={handleChange("email")} value={values.email} onBlur={handleBlur("email")} />

                                    {touched.email && errors.email && (
                                        <Text className="text-red-500 text-xs mb-2" >{errors.email}
                                        </Text>
                                    )}

                                    <Text className="text-[#f49b33] mb-2 mt-4">Password</Text>
                                    <TextInput className="h-10 border border-white text-white rounded px-2" secureTextEntry onChangeText={handleChange("password")} value={values.password} onBlur={handleBlur("password")} />

                                    {touched.password && errors.password && (
                                        <Text className="text-red-500 text-xs mb-2" >{errors.password}
                                        </Text>
                                    )}

                                    <TouchableOpacity onPress={handleSubmit} className="p-2 my-2 bg-[#f49b33] text-black rounded-lg mt-10">
                                        <Text className="text-lg font-semibold text-center">Sign Up</Text>
                                    </TouchableOpacity>

                                </View>
                            )}
                        </Formik>
                    </View>
                </View>

                <View className="flex-1">
                    <Image source={entryImg} className="w-full h-full" resizeMode="contain" />
                </View>
                <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Signup