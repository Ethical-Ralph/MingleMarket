import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as authActions from "../store/actions/auth";

class UpdateProfile extends React.Component {
  updateUserProfile = (e) => {
    e.preventDefault();
    this.props.updateProfile(
      this.props.user,
      e.target.profile_photo.files[0],
      e.target.first_name.value,
      e.target.last_name.value,
      e.target.phone_number.value,
      e.target.bio.value,
      e.target.catch_phrase.value,
      this.props.token
    );
  };

  render() {
    const profile = this.props.profile;
    if (this.props.token === null) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container bootstrap snippet">
        <div className="row">
          <div className="col-sm-10">
            <h1>{this.props.user}</h1>
          </div>
          <div className="col-sm-2"></div>
        </div>
        <form
          className="form"
          method="put"
          id="registrationForm"
          onSubmit={this.updateUserProfile}
        >
          <div className="row">
            <div className="form-group col-sm-3">
              <div className="text-center">
                <label htmlFor="profile_photo">
                  <h4>Display Picture</h4>
                </label>
                <img
                  src={profile.photo}
                  className="avatar img-circle img-thumbnail"
                  alt="avatar"
                />
                <h6>Upload a different photo...</h6>
                <input
                  name="profile_photo"
                  type="file"
                  id="profile_photo"
                  className="text-center center-block file-upload"
                />
              </div>
            </div>
            <div className="col-sm-9">
              <div className="form-group">
                <div className="col-xs-6">
                  <label htmlFor="first_name">
                    <h4>First name</h4>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    id="first_name"
                    placeholder={profile.first_name}
                    title="enter your first name if any."
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-6">
                  <label htmlFor="last_name">
                    <h4>Last name</h4>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    id="last_name"
                    placeholder={profile.last_name}
                    title="enter your last name if any."
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-6">
                  <label htmlFor="phone">
                    <h4>Phone</h4>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder={profile.phone_number}
                    title="enter your phone number if any."
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-6">
                  <label htmlFor="mobile">
                    <h4>Bio</h4>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="bio"
                    id="bio"
                    placeholder={profile.bio}
                    title="Enter a short description of yourself"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-6">
                  <label htmlFor="mobile">
                    <h4>Catch Phrase</h4>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="catch_phrase"
                    id="catch_phrase"
                    placeholder={profile.catch_phrase}
                    title="Enter a short description of yourself"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-12">
                  <button className="btn btn-lg btn-success" type="submit">
                    <i className="glyphicon glyphicon-ok-sign"></i> Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.username,
    profile: state.auth.profile,
    token: state.auth.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateProfile: (
      user,
      photo,
      first_name,
      last_name,
      phone_number,
      bio,
      catch_phrase,
      token
    ) =>
      dispatch(
        authActions.updateUserProfile(
          user,
          photo,
          first_name,
          last_name,
          phone_number,
          bio,
          catch_phrase,
          token
        )
      ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfile);
