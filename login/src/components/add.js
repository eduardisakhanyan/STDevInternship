import React, {Component} from 'react';
import EditAddForm from '../forms/EditAddForm';
import { connect } from 'react-redux';
import { addProduct } from '../store/actions/products'
import { updateUser } from '../store/actions/user'


class Add extends Component {
    submit = async (value) => {
        value.userId = this.props.user.id;
        let id = value.userId;
        let product = await fetch('http://localhost:3004/products', {
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify(value)
        })
        .then(response => response.json());
        product.userId=id;
        delete product.id;
        console.log(product);
        await addProduct(product);
        let oldTotal = await fetch('http://localhost:3004/users/' + id)
        .then(response => response.json());
        oldTotal.totalProducts++;

        fetch('http://localhost:3004/users/' + id, {
            method: 'PUT',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify(oldTotal)
        })
        .then(() => updateUser(oldTotal.totalProducts))
        .then(() => this.props.history.push('/home'));
        
    }

    render () {
        return (
            <EditAddForm onSubmit={this.submit} buttonName='Add' />
        )
    }
}

const mapStateToProps = state => {
    return {    
      user: state.user,
    }
  }
  
  export default connect(
    mapStateToProps,
    null
    )(Add);