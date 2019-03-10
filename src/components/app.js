import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {
  FlexContainer,
  Overlay,
  OverlayContainer,
  CardImage,
  PencilIcon,
  CloseIcon,
  Modal,
  ModalContent,
  CloseModal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalBodyLayout
} from './Components';
// import {Wrapper, Title} from './Components';

class App extends Component {
  constructor(props) {
    super(props);
    this.renderImages = this.renderImages.bind(this);
    this.openModal = this.openModal.bind(this);
    this.readURL = this.readURL.bind(this);
  }
  componentDidMount() {
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  openModal(img) {
    const modal = document.getElementById('myModal');
    modal.style.display = "block";
    this.props.setCurrentImage(img);
  }
  readURL(input) {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const blah = document.getElementById('blah');
        blah.setAttribute('src', e.target.result);
        blah.setAttribute('height', 200);
        blah.setAttribute('width', 200);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  renderImages() {
    const { images = [] } = this.props;
    const grid = images.map((img) => {
      return (
        <OverlayContainer> 
          <CardImage src={img.image_url} />
          <Overlay>
            <PencilIcon onClick={() => {
              console.log('dfsdf');
              this.openModal(img);
            }}>
              <i className="fa fa-pencil"></i>
            </PencilIcon>
            <CloseIcon>
              <i className="fa fa-times"></i>
            </CloseIcon>
          </Overlay>
        </OverlayContainer>
      )
    });
    return grid;
  }
  render() {
    return (
      <FlexContainer>
        {this.renderImages()}
        <Modal id="myModal">
          <ModalContent>
            <ModalHeader>
              <CloseModal className="close">&times; </CloseModal>
              <h5>Edit Image</h5>
            </ModalHeader>
            <ModalBody>
               <ModalBodyLayout>
                <div style={{marginBottom: 20, height: 200, width: 200}}>
                  <h5>Original Image</h5>
                  <CardImage src={this.props.currentImage.image_url || ''} />
                </div>
                <div style={{height: 200, width: 200}}>
                  <h5>New Image</h5>
                  <img id="blah" src="http://via.placeholder.com/200x200" alt="your image" /><hr/>
                  <input
                    style={{
                      border: '1px solid #ccc',
                      display: 'inline-block',
                      width: '100%',
                      padding: '6px 12px',
                      cursor: 'pointer',
                    }}
                    type='file' onChange={(e) => {
                    e.preventDefault();
                    this.readURL(e.target);
                  }} />
                  <button
                    style={{
                      'background-color': 'white',
                      border: '2px solid #008CBA',
                      color: 'black',
                      padding: '5px',
                      width: '100%',
                      'text-align': 'center',
                      'text-decoration': 'none',
                      display: 'inline-block',
                      'font-size': '16px',
                      margin: '4px 2px',
                      cursor: 'pointer'
                    }}>Confirm Image</button>
                </div>
               </ModalBodyLayout>
            </ModalBody>
          </ModalContent>
        </Modal>
      </FlexContainer>
    );
  }
}
App.propTypes = {
  images: PropTypes.array.isRequired, //eslint-disable-line
  currentImage: PropTypes.object.isRequired, //eslint-disable-line
  setCurrentImage: PropTypes.func.isRequired,
  deleteImage: PropTypes.func.isRequired,
  updateImage: PropTypes.func.isRequired
}
const mapStateToProps = state => {
  const {images=[], currentImage={}} = state.AppState;
  return {
    images : images,
    currentImage: currentImage
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setCurrentImage : (image) => dispatch({
      type : 'SET_CURRENT_IMAGE',
      image
    }),
    deleteImage : () => dispatch({
      type : 'DELETE_IMAGE'
    }),
    updateImage : () => dispatch({
      type : 'UPDATE_IMAGE'
    }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)