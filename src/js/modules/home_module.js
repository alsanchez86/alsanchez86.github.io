'use strict';

define(['module', 'jquery_cache_module'], function (module, _$) {
  module.exports.run = () => {
    animateSkills();
    handleContactForm();
  };

  function animateSkills() {
    const $items = _$('.progress-item');

    $items.addClass('progress-item-animated');

    setTimeout(() => {
      $items.addClass('progress-item-animated-completed');
    }, 1000);
  }

  function handleContactForm() {
    const $form = _$('#contact-form');
    const formElement = $form[0];
    const $nameInput = _$('#contact-form-name');
    const $emailInput = _$('#contact-form-email');
    const $messageInput = _$('#contact-form-message');
    const $submitBtn = _$('#contact-form-submit-btn');
    const $statusSuccess = _$('#contact-form-status-success');
    const $statusError = _$('#contact-form-status-error');
    const $statusErrorBtnClose = _$('#contact-form-status-error-btn-close');
    const $statusSuccessBtnClose = _$(
      '#contact-form-status-error-success-close',
    );

    $statusErrorBtnClose.on('click', clearStatus);
    $statusSuccessBtnClose.on('click', clearStatus);
    $form
      .on(
        'input change',
        '#contact-form-name, #contact-form-email, #contact-form-message',
        function () {
          validateForm();
          clearStatus();
        },
      )
      .on('submit', async function (event) {
        event.preventDefault();

        clearStatus();
        $submitBtn.prop('disabled', true);

        try {
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(new FormData(formElement))),
          });
          const data = await response.json();

          if (response.ok && data.success) {
            showStatus('success');
            formElement.reset();
          } else {
            throw new Error();
          }
        } catch (error) {
          showStatus('error');
        } finally {
          validateForm();
        }
      });

    function validateForm() {
      const nameVal = ($nameInput.val() || '').trim();
      const messageVal = ($messageInput.val() || '').trim();
      const emailElement = $emailInput[0];
      const isEmailValid =
        emailElement &&
        emailElement.value.trim().length > 0 &&
        emailElement.checkValidity();
      const isValid =
        nameVal.length > 0 && isEmailValid && messageVal.length > 0;

      $submitBtn.prop('disabled', !isValid);
    }

    function showStatus(type) {
      if (type === 'success') {
        $statusSuccess.removeClass('d-none');
      } else if (type === 'error') {
        $statusError.removeClass('d-none');
      }
    }

    function clearStatus() {
      $statusSuccess.addClass('d-none');
      $statusError.addClass('d-none');
    }
  }
});
