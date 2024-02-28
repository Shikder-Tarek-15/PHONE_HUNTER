const loadPhone = async (searchData = "apple", isTrue) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchData}`
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  displayPhone(phones, isTrue);
};

const displayPhone = (phones, isTrue) => {
  const phoneContainer = document.getElementById("phone-container");
  //Clear phone container before add
  phoneContainer.textContent = "";
  // show all btn if more than 12 card
  const showAllBtn = document.getElementById("show-all-btn");
  if (phones.length > 12 && !isTrue) {
    showAllBtn.classList.remove("hidden");
  } else {
    showAllBtn.classList.add("hidden");
  }

  // slice
  if (!isTrue) {
    phones = phones.slice(0, 12);
  }

  phones.forEach((phone) => {
    console.log(phone);
    // display Phone
    const phoneCard = document.createElement("div");
    phoneCard.classList = "card bg-base-100 p-4 border border-gray-300";
    phoneCard.innerHTML = `
    <figure>
              <img
                src="${phone.image}"
                alt="Shoes"
              />
            </figure>
            <div class="card-body space-y-4">
              <h2 class="text-2xl font-bold text-center">${phone.phone_name}</h2>
              <p>
                There are many variation of phones . This is one of the best
                phone in this price
              </p>
              <div class="card-actions justify-center">
                <button class="btn btn-accent">Buy Now</button>
              </div>
            </div>
    `;

    phoneContainer.appendChild(phoneCard);
  });
  loadingBar(false);
};

const searchPhone = (isTrue) => {
  loadingBar(true);
  const search = document.getElementById("search-input");
  const searchData = search.value;
  const lowerCaseData = searchData.toLowerCase();
  loadPhone(lowerCaseData, isTrue);
};

const loadingBar = (isLoading) => {
  const loading = document.getElementById("loading-bar");
  if (isLoading) {
    loading.classList.remove("hidden");
  } else {
    loading.classList.add("hidden");
  }
};

const handleShowAll = () => {
  searchPhone(true);
};

loadPhone();
