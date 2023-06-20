import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState("");
    const [courseGoals, setCourseGoals] = useState([]);

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, key: Math.random().toString() },
        ]);
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput
                goalInputHandler={goalInputHandler}
                addGoalHandler={addGoalHandler}
            />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return <GoalItem text={itemData.item.text} />;
                    }}
                />
                {/* {courseGoals.map((goal) => (
                    <View key={goal} style={styles.goalItem}>
                        <Text style={styles.goalText}>
                            {goal}
                        </Text>
                    </View>
                ))}
            </FlatList> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 5,
    },
});
