import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
    return (
        <>
            <Tabs
                screenOptions={{
                    sceneStyle: {
                        backgroundColor: "#fff"
                    },
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarInactiveBackgroundColor: "transparent",
                    tabBarActiveBackgroundColor: "transparent",
                    tabBarStyle: {
                        display: "none"
                    }
                }}


            >


            </Tabs>

        </>


    );
}