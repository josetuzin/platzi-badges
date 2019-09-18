import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import api from '../api'


// página
class BadgeNew extends React.Component {

    state = { form: {} }

    handleChange = e => {
        this.setState({
            form: {  // esto se hace para agregar datos de a 1, y no sobreescribir todo
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        }) 
    }

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null })

        try {
            await api.badges.create(this.state.form)
            this.setState({ loading: false})
            this.props.history.push('/Badges')
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img src={header} alt="" 
                    className="BadgeNew__hero-img img-fluid"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'FIRST_NAME' }
                                lastName={this.state.form.lastName || 'LAST_NAME' }
                                twitter={this.state.form.twitter || 'twitter' }
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE' }
                                email={this.state.form.email}
                                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit} 
                                formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default BadgeNew



