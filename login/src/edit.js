import React, {Component} from 'react';
import EditAddForm from './EditAddForm';
import { connect } from 'react-redux';
import { getProductsByToken } from './store/actions/products';
import { clearProduct } from './store/actions/product';


class Edit extends Component {

    componentDidMount() {
    }

    submit = (value) => {
        value.userId = this.props.product.userId;
        fetch('http://localhost:3004/products/' + this.props.product.id, {
            method: 'PUT',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify(value)
        })
        .then(response => response.text())
        .then( (text) => {
            console.log(text);
            this.props.clearProduct();
            this.props.history.push('/home');
        })
    }

    getInitialValues = () => {
        return {
            name: this.props.product.name,
            price: this.props.product.price,
            expDate: this.props.product.expDate,
        };
    }

    render () {
        return (
            <EditAddForm onSubmit={this.submit} buttonName='Edit' initialValues={this.getInitialValues()} />
        )
    }
}

const mapStateToProps = state => {
    return {    
      user: state.user,
      product: state.product,
    }
}

const mapDispatchToProps = { getProductsByToken,clearProduct };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(Edit);