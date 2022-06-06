const CheckDefault = document.getElementById('flexSwitchCheckDefault');
CheckDefault.addEventListener('change', function(e) {
    let first_price = document.getElementById('first_price');
    let second_price = document.getElementById('second_price');
    let third_price = document.getElementById('third_price');
    if (CheckDefault.checked) {
    first_price.innerHTML = `<div class="card-header bg-white p-2 pb-4 text-black-50"><span class="fs-2">$</span><span class="fs-1">0.00</span><span class="fs-6">/year</span>
    </div>`;
    second_price.innerHTML = `<div class="card-header bg-white p-2 pb-4 text-black-50"><span class="fs-2">$</span><span class="fs-1">72.00</span><span class="fs-6">/year</span>
    </div>`;
    third_price.innerHTML = `<div class="card-header bg-white p-2 pb-4 text-black-50"><span class="fs-2">$</span><span class="fs-1">180.00</span><span class="fs-6">/year</span>
    </div>`;
    } 
    else {
    first_price.innerHTML = `<div class="card-header bg-white p-2 pb-4 text-black-50"><span class="fs-2">$</span><span class="fs-1">0.00</span><span class="fs-6">/monthly</span>
    </div>`;
    second_price.innerHTML = `<div class="card-header bg-white p-2 pb-4 text-black-50"><span class="fs-2">$</span><span class="fs-1">6.00</span><span class="fs-6">/monthly</span>
    </div>`;
    third_price.innerHTML = `<div class="card-header bg-white p-2 pb-4 text-black-50"><span class="fs-2">$</span><span class="fs-1">15.00</span><span class="fs-6">/monthly</span>
    </div>`;
    }
    });