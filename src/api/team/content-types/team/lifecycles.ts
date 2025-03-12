import { generateSlug } from "../../../../utils/helper";

export default {
  beforeCreate(event) {
    const { data } = event.params;

    if (data.name) {
      data.slug = generateSlug(data.name);
    }
  },

  beforeUpdate(event) {
    const { data } = event.params;

    if (data.name) {
      data.slug = generateSlug(data.name);
    }
  },
};
