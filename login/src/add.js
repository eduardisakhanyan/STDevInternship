import React, { Component } from 'react';
import EditAddForm from './EditAddForm';
import { connect } from 'react-redux';
import { addProduct } from './store/actions/products'


class Add extends Component {
    submit = (value) => {
        value.userId = this.props.user[0].id.toString();
        let id = value.userId;
        fetch('http://localhost:3004/products', {
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify(value)
        })
            .then(response => response.json())
            .then(product => {
                product.userId = id.toString();
                delete product.id;
                return this.props.addProduct(product);
            })
            .then(() => {
                this.props.history.push('/home');
            })
    }

    getInitialValues = () => {
        return {
            name: '',
            price: '',
            expDate: '',
        };
    }

    render() {
        return (
            <EditAddForm onSubmit={this.submit} buttonName='Add' initialValues={this.getInitialValues()} />
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = { addProduct };
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Add);