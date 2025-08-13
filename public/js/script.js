//  // Wait until the DOM is fully loaded
//   document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('deleteForm');

//     form.addEventListener('submit', function (e) {
//       const confirmed = confirm("⚠️ Are you sure to delete this listing? This action cannot be undone.");
//       if (!confirmed) {
//         e.preventDefault(); // stop form submission
//       }
//     });
//   });



// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('deleteForm');
    
    // Create modal HTML dynamically
    const modalHTML = `
        <div id="deleteModal" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(5px);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 1050;
            opacity: 0;
            transition: opacity 0.3s ease;
        ">
            <div id="customModal" style="
                background: white;
                border-radius: 20px;
                max-width: 480px;
                width: 90%;
                overflow: hidden;
                transform: scale(0.7);
                transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            ">
                <div style="
                    background: linear-gradient(135deg, #dc3545, #c82333);
                    padding: 30px;
                    text-align: center;
                    color: white;
                ">
                    <div style="
                        width: 80px;
                        height: 80px;
                        background: rgba(255, 255, 255, 0.2);
                        border-radius: 50%;
                        margin: 0 auto 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 40px;
                        animation: modalPulse 2s infinite;
                    ">🗑️</div>
                    <h3 style="
                        font-size: 24px;
                        font-weight: 700;
                        margin: 0;
                    ">Delete Listing</h3>
                </div>
                <div style="padding: 30px;">
                    <div style="
                        background: linear-gradient(135deg, #fff3cd, #ffeaa7);
                        border: 1px solid #ffc107;
                        border-radius: 12px;
                        padding: 20px;
                        margin-bottom: 25px;
                        text-align: center;
                    ">
                        <span style="font-size: 24px; margin-bottom: 10px; display: block;">⚠️</span>
                        <p style="font-weight: 600; color: #856404; margin: 0;">
                            This action cannot be undone!
                        </p>
                    </div>
                    <p style="
                        text-align: center;
                        font-size: 18px;
                        color: #555;
                        line-height: 1.6;
                        margin-bottom: 25px;
                    ">
                        Are you sure you want to permanently delete this listing? All associated data will be removed.
                    </p>
                    <div style="
                        display: flex;
                        gap: 15px;
                        justify-content: center;
                        flex-wrap: wrap;
                    ">
                        <button type="button" id="cancelBtn" style="
                            padding: 12px 30px;
                            border: 2px solid #e9ecef;
                            border-radius: 25px;
                            font-size: 16px;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all 0.3s ease;
                            text-transform: uppercase;
                            letter-spacing: 0.5px;
                            min-width: 120px;
                            background: #f8f9fa;
                            color: #6c757d;
                        ">Cancel</button>
                        <button type="button" id="confirmBtn" style="
                            padding: 12px 30px;
                            border: none;
                            border-radius: 25px;
                            font-size: 16px;
                            font-weight: 600;
                            cursor: pointer;
                            transition: all 0.3s ease;
                            text-transform: uppercase;
                            letter-spacing: 0.5px;
                            min-width: 120px;
                            background: linear-gradient(135deg, #dc3545, #c82333);
                            color: white;
                        ">Delete Forever</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes modalPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        #deleteModal.show {
            display: flex !important;
            opacity: 1 !important;
        }
        
        #deleteModal.show #customModal {
            transform: scale(1) !important;
        }
        
        #cancelBtn:hover {
            background: #e9ecef !important;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        #confirmBtn:hover {
            background: linear-gradient(135deg, #c82333, #a71e2a) !important;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(220, 53, 69, 0.4);
        }
        
        @media (max-width: 480px) {
            #deleteModal > div {
                width: 95% !important;
            }
            #deleteModal > div > div:last-child > div:last-child {
                flex-direction: column !important;
            }
            #deleteModal > div > div:last-child > div:last-child > button {
                width: 100% !important;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Get modal elements
    const modal = document.getElementById('deleteModal');
    const cancelBtn = document.getElementById('cancelBtn');
    const confirmBtn = document.getElementById('confirmBtn');
    
    // Show modal function
    function showModal() {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    // Hide modal function
    function hideModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    // Handle form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission
        showModal(); // Show custom modal instead
    });
    
    // Cancel button - just close the modal
    cancelBtn.addEventListener('click', function() {
        hideModal();
    });
    
    // Confirm button - proceed with deletion
    confirmBtn.addEventListener('click', function() {
        hideModal();
        
        // Actually submit the form
        // Create a new form to avoid the event listener
        const newForm = form.cloneNode(true);
        form.parentNode.replaceChild(newForm, form);
        newForm.submit();
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            hideModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            hideModal();
        }
    });
});











//FORM VALIDATION

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()