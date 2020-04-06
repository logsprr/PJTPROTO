import * as React from 'react';
import ScrollableNavigationBar, {
    StatusBarComponent,
    NavigationBarIcon,
    BackButton,
} from 'react-native-scrollable-navigation-bar';
import Placeholders from './Placeholders';

class MainTitleNavigationBar extends React.Component {
    render() {
        return (
            <ScrollableNavigationBar
                transitionPoint={250}
                StatusBar={() => (
                    <StatusBarComponent
                        barStyle="dark-content"
                        backgroundColor="#f5f5f5"
                    />
                )}
                title="Title"
                headerTitle="Title"
                headerTitleStyle={{
                    paddingTop: -200
                }}
                headerBackgroundColor="#f5f5f5"
                borderColor="lightgrey"
                BackButton={({ style }) => (
                    <BackButton
                        style={style}
                    />
                )}
                {...this.props}
            >
                <Placeholders number={2} />
            </ScrollableNavigationBar>
        );
    }
}

export default React.forwardRef((props, ref) => (
    <MainTitleNavigationBar containerRef={ref} {...props} />
));