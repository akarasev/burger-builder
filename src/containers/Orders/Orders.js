import React from 'react';

import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Order from '../../components/Order/Order';

class Orders extends React.Component {
    state = {
        orders: [],
        loading: true,
    };
    componentDidMount() {
        axios.get('https://burger-app-12cbf.firebaseio.com/orders.json')
            .then(response => {
                const fetchedOrders = [];
                for (let key in response.data) {
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    });
                }
                this.setState({orders: fetchedOrders, loading: false});
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => {
                    return <Order key={order.id} ingredients={order.ingredients} price={order.totalPrice}/>
                })}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);