import React, { Component } from 'react';
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Appbar } from 'react-native-paper';
import { View } from 'react-native';
class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        };
    }
    handleIndexChange = index => {
        this.setState({
            ...this.state,
            selectedIndex: index
        });
    };
    render() {
        return (
            <>
                <Appbar.Header style={{ backgroundColor: 'white' }} >
                    <Appbar.Content
                        titleStyle={{ alignSelf: 'center' }}
                        title="Atividades"
                    />
                </Appbar.Header>
                <View style={{
                    margin: 10
                }} >

                    <View style={{
                        backgroundColor: '#ddd',
                        padding: 2.5,
                        borderRadius: 10,
                    }}>
                        <SegmentedControlTab
                            values={["Tarefas", "Projetos", "Checks"]}
                            selectedIndex={this.state.selectedIndex}
                            onTabPress={this.handleIndexChange}
                            activeTabStyle={{
                                backgroundColor: 'white',
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                                borderRadius: 5
                            }}
                            activeTabTextStyle={{
                                color: 'black'
                            }}
                            tabTextStyle={{
                                color: 'black'
                            }}
                            tabStyle={{
                                borderWidth: 0,
                                backgroundColor: '#ddd'
                            }}
                        />
                    </View>
                </View>
            </>
        )
    }
}

export default Task;
