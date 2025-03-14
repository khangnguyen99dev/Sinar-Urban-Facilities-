import { generateSlug } from "../../../../utils/helper";

export default {
  beforeCreate(event) {
    const { data } = event.params;

    if (data.title) {
      data.slug = generateSlug(data.title);
    }
  },

  beforeUpdate(event) {
    const { data } = event.params;

    if (data.title) {
      data.slug = generateSlug(data.title);
    }
  },
};
