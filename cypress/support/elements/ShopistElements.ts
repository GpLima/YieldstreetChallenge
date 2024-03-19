export default class shopistElements {
  heroBanner(): string {
    return 'div';
  }

  departmentBanner(): string {
    return 'a.department';
  }

  productCard(): string {
    return 'div[id="main"] img';
  }

  productTitle(): string {
    return 'div.description div';
  }

  addToCartButton(): string {
    return 'div.purchase-button';
  }

  checkoutButton(): string {
    return 'div.checkout';
  }

  menuButtonActive(): string {
    return 'a.a-exact-active';
  }

  productDescription(): string {
    return '.product-description';
  }

  checkoutTitle(): string {
    return 'div.checkout-title';
  }

  profileButton(): string {
    return 'a.profile';
  }

  editProfileButton(): string {
    return 'a[href="/profile-edit"]';
  }

  uploadImageButton(): string {
    return 'label.button';
  }

  firstNameInputEditProfile(): string {
    return '#firstname';
  }


  souldOutProductCard(): string {
    return 'div.status--red';
  }

  soldOutWarningMessage(): string {
    return 'div.modal-title';
  }

  soldOutWarningModal(): string {
    return 'div.modal-sold-out-content';
  }

  signUpButton(): string {
    return 'div.signup-button';
  }

  successMessage(): string {
    return '.success';
  }

  successMessageLink(): string {
    return 'div.success a';
  }

  firstNameInputSignUp(): string {
    return 'input#fn-input';
  }

  lastNameInputSignUp(): string {
    return 'input#ln-input';
  }

  emailInputSignUp(): string {
    return 'input#email-addr-input';
  }

  CompleteSignUpButton(): string {
    return 'div.signup-button';
  }

  errorModal(): string {
    return '.modal-error-content';
  }

  errorModalTitle(): string {
    return '.modal-error-content > .modal-title';
  }


  
}
