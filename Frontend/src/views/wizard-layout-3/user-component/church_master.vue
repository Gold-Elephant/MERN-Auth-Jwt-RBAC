<template>
  <div>
    <div class="text-center font-medium text-4xl">
      Church Master field data
    </div>
    <div class="grid grid-cols-12 gap-4 gap-y-5 mt-5">
      <div class="intro-y col-span-12 sm:col-span-6">
        <label class="form-label" for="id2">Church status</label>
        <select id="id2" class="form-select">
          <option>SG</option>
          <option>DA</option>
          <option>CP</option>
          <option>BR</option>
          <option>HC</option>
        </select>
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label class="form-label">Church Region</label>
        <select class="form-select">
          <option>CO-UN</option>
        </select>
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="input-wizard-3" class="form-label">CIN</label>
        <input
          id="input-wizard-3"
          type="text"
          class="form-control"
          placeholder="Please input CIN"
        />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="input-wizard-4" class="form-label">Church Name</label>
        <input
          id="input-wizard-4"
          type="text"
          class="form-control"
          placeholder="Please input Church Name"
        />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Church Location</label>
        <input
          type="text"
          class="form-control"
          placeholder="Please input Church Location"
        />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="id5" class="form-label">Established</label>
        <input id="id5" type="date" class="form-control" placeholder="" />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="id6" class="form-label">Validity</label>
        <input id="id6" type="month" class="form-control" placeholder="" />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Corresponding Language</label>
        <input
          type="text"
          class="form-control"
          placeholder="Please input Corresponding Language"
        />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Church Address</label>
        <input
          type="text"
          class="form-control"
          placeholder="Please input Address"
        />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">SP_PIN#</label>
        <input
          type="text"
          class="form-control"
          value="Senior Pastor PIN#"
          placeholder="Senior Pastor PIN#"
        />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">SP_Name#</label>
        <input
          type="text"
          class="form-control"
          value="Senior Pastor Name#"
          placeholder="Senior Pastor Name#"
          disabled
        />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Parent CIN#</label>
        <input
          type="text"
          class="form-control"
          value="Only for Branch"
          placeholder="Only for Branch"
        />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Parent name</label>
        <input
          type="text"
          class="form-control"
          value="Name of Parent Church"
          disabled
        />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Postal Code</label>
        <input
          type="text"
          class="form-control"
          placeholder="Please input Postal Code"
        />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label class="form-label">SL Province</label>
        <select class="form-select">
          <option>list of SL Provinces</option>
        </select>
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label class="form-label">SL District</label>
        <select class="form-select">
          <option>sub list of SL Province</option>
        </select>
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">DS Division</label>
        <input type="text" class="form-control" placeholder="" />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">GS Area</label>
        <input type="text" class="form-control" placeholder="" />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Ch Land Line</label>
        <input type="text" class="form-control" placeholder="" />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Cn Mobile</label>
        <input value="Churnch Mobile" type="text" class="form-control" />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Cn Email</label>
        <input value="Churnch Email" type="text" class="form-control" />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Cn Web Address</label>
        <input type="text" class="form-control" placeholder="" />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Local Pastor PIN#</label>
        <input type="text" class="form-control" placeholder="" />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Local Pastor</label>
        <input value="Name of the pastor" type="text" class="form-control" />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">LCW Name</label>
        <textarea
          value="Non Member Parstor name"
          type="text"
          class="form-control"
          textarea
        />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Local Pastor Mobile</label>
        <input
          type="text"
          class="form-control"
          value="Local Pastor Mobile/label"
          disabled
        />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Assistant Pastor</label>
        <input
          type="text"
          class="form-control"
          placeholder="Add as list item CIN + name + SMS Num"
        />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Last AGM held</label>
        <input value="" type="date" class="form-control" />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <span class="text-gray-700">Audited Accts</span>
        <div class="mt-2">
          <label class="inline-flex items-center">
            <input
              type="radio"
              class="form-radio h-5 w-5"
              name="audited"
              value="auditedl"
              checked
            />
            <span class="ml-2">Yes</span>
          </label>
          <label class="inline-flex items-center ml-6">
            <input
              type="radio"
              class="form-radio h-5 w-5"
              name="audited"
              value="audited2"
            />
            <span class="ml-2">No</span>
          </label>
        </div>
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Annual Income</label>
        <input value="" type="number" class="form-control" />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Annual Expenditure</label>
        <input value="" type="number" class="form-control" />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Bank Info</label>
        <textarea
          placeholder="Please Input Bank Info"
          type="text"
          class="form-control"
          textarea
        />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Signatories</label>
        <textarea
          placeholder="Please Input Signatories"
          type="text"
          class="form-control"
          textarea
        />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Church Location Lat/Lon</label>
        <input value="" type="text" class="form-control" />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Church Images</label>
        <input value="" type="file" class="form-control" />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <span class="text-gray-700">Active</span>
        <div class="mt-2">
          <label class="inline-flex items-center">
            <input
              type="radio"
              class="form-radio h-5 w-5"
              name="accountType"
              value="personal"
              checked
            />
            <span class="ml-2">Yes</span>
          </label>
          <label class="inline-flex items-center ml-6">
            <input
              type="radio"
              class="form-radio h-5 w-5"
              name="accountType"
              value="busines"
            />
            <span class="ml-2">No</span>
          </label>
        </div>
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="" class="form-label">Service Time</label>
        <table class="w-full border-collapse bg-white	">
          <thead class="bg-yellow-200 bg-opacity-25">
            <tr>
              <th class="p-3 text-left border-grey-light border">Language</th>
              <th class="p-3 text-left border-grey-light border">Day</th>
              <th class="p-3 text-left border-grey-light border">Time</th>
            </tr>
          </thead>
          <tbody class="flex-1 sm:flex-none">
            <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
              <td
                class="border-grey-light border hover:bg-gray-100 bg-opacity-25 p-3"
              >
                1
              </td>
              <td
                class="border-grey-light border hover:bg-gray-100 bg-opacity-25 p-3"
              >
                2
              </td>
              <td
                class="border-grey-light border hover:bg-gray-100 bg-opacity-25 p-3"
              >
                3
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
