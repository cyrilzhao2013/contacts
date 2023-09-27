import { BaseModule } from "@/modules/base.module";
import { IGroup } from "./types/group.type";
import * as GroupAPI from "./api/group.api";

export class Group extends BaseModule<IGroup, never> {
  async deleteGroup() {
    await GroupAPI.deleteGroup({ group_id: this.get("id") });
  }

  async addContact(contactId: string) {
    await GroupAPI.addContact({
      contact_id: contactId,
      group_id: this.get("id"),
    });
  }

  async removeContact(contactId: string) {
    await GroupAPI.removeContact({
      contact_id: contactId,
      group_id: this.get("id"),
    });
  }

  static async createGroup(data: Pick<IGroup, "name">) {
    const resp = await GroupAPI.createGroup(data);

    return new Group(resp);
  }
}
