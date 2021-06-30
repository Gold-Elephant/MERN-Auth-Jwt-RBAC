<template>
  <div>
    <div class="text-center font-medium text-4xl">
      Other Info andividual Tables
    </div>
    <div class="grid grid-cols-12 gap-4 gap-y-5 mt-5">
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="id5" class="form-label">CAR Info</label>
        <input id="id5" type="date" class="form-control" placeholder="" />
      </div>
      <div class="intro-y col-span-12 sm:col-span-6">
        <label for="id5" class="form-label">Status Change Info</label>
        <input id="id5" type="text" class="form-control" placeholder="" />
      </div>
    </div>
    <div>
      <div class="text-center font-medium text-2xl mt-4">
        LCW Info
      </div>
      <table class="rounded-t-lg w-full text-center border-collapse">
        <thead class="bg-blue-900">
          <tr class="text-left border-b-2 border-gray-300 text-white">
            <th class="px-4 py-3 border border-gray-300">No</th>
            <th class="px-4 py-3 border border-gray-300">
              Name
            </th>
            <th class="px-4 py-3 border border-gray-300">
              Type
            </th>
            <th class="px-4 py-3 border border-gray-300">NIC</th>
            <th class="px-4 py-3 border border-gray-300">Mobile</th>
            <th class="px-4 py-3 border border-gray-300">Remove</th>
          </tr>
        </thead>
        <tbody v-if="items.length > 0">
          <tr
            v-for="(item, index) in items"
            :key="index"
            class="border-b border-gray-200"
          >
            <td class="px-4 py-3 border border-gray-300">{{ index + 1 }}</td>
            <td class="px-4 py-3 border border-gray-300">
              <input
                v-model="item.name"
                class="form-control"
                type="text"
                placeholder="please input"
              />
            </td>
            <td class="px-4 py-3 border border-gray-300">
              <input
                v-model="item.quantity"
                class="form-control"
                type="text"
                placeholder="please input"
              />
            </td>
            <td class="px-4 py-3 border border-gray-300">
              <input
                v-model="item.amount"
                class="form-control"
                type="text"
                placeholder="please input"
              />
            </td>
            <td class="px-4 py-3 border border-gray-300">
              <input
                v-model="item.total"
                class="form-control"
                type="text"
                placeholder="please input"
              />
            </td>
            <td class="border border-gray-300">
              <button class="btn btn-danger btn-sm" @click="removeItem(index)">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        class="btn btn-success mt-1 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-dark hover:border-blue rounded"
        @click="AddItem"
      >
        Insert row
      </button>
    </div>
    <div>
      <div class="text-center font-medium text-2xl mt-4">
        Bank Info
      </div>
      <table class="rounded-t-lg w-full text-center border-collapse">
        <thead class="bg-blue-900">
          <tr class="text-left border-b-2 border-gray-300 text-white">
            <th class="px-4 py-3 border border-gray-300">No</th>
            <th class="px-4 py-3 border border-gray-300">
              Bank Name
            </th>
            <th class="px-4 py-3 border border-gray-300">
              Account Name
            </th>
            <th class="px-4 py-3 border border-gray-300">Account Number</th>
            <th class="px-4 py-3 border border-gray-300">Branch</th>
            <th class="px-4 py-3 border border-gray-300">Branch Code</th>
            <th class="px-4 py-3 border border-gray-300">Remove</th>
          </tr>
        </thead>
        <tbody v-if="items_2.length > 0">
          <tr
            v-for="(item, index) in items_2"
            :key="index"
            class="border-b border-gray-200"
          >
            <td class="px-4 py-3 border border-gray-300">{{ index + 1 }}</td>
            <td class="px-4 py-3 border border-gray-300">
              <input
                v-model="item.name_2"
                class="form-control"
                type="text"
                placeholder="please input"
              />
            </td>
            <td class="px-4 py-3 border border-gray-300">
              <input
                v-model="item.quantity_2"
                class="form-control"
                type="text"
                placeholder="please input"
              />
            </td>
            <td class="px-4 py-3 border border-gray-300">
              <input
                v-model="item.amount_2"
                class="form-control"
                type="text"
                placeholder="please input"
              />
            </td>
            <td class="px-4 py-3 border border-gray-300">
              <input
                v-model="item.total_2"
                class="form-control"
                type="text"
                placeholder="please input"
              />
            </td>
            <td class="px-4 py-3 border border-gray-300">
              <input
                v-model="item.data_2"
                class="form-control"
                type="text"
                placeholder="please input"
              />
            </td>
            <td class="border border-gray-300">
              <button
                class="btn btn-danger btn-sm"
                @click="removeItem_2(index)"
              >
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        class="btn btn-success mt-1 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-dark hover:border-blue rounded"
        @click="AddItem_2"
      >
        Insert row
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          name: "",
          quantity: "",
          amount: "",
          total: ""
        }
      ],
      items_2: [
        {
          name_2: "",
          quantity_2: "",
          amount_2: "",
          total_2: "",
          data_2: ""
        }
      ]
    };
  },
  methods: {
    AddItem() {
      this.items.push({
        name: "",
        quantity: "",
        amount: "",
        total: ""
      });
    },
    AddItem_2() {
      this.items_2.push({
        name_2: "",
        quantity_2: "",
        amount_2: "",
        total_2: "",
        data_2: ""
      });
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    removeItem_2(index) {
      this.items_2.splice(index, 1);
    }
  }
};
</script>
