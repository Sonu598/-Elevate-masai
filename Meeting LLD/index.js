class Slot {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

class Slots {
  constructor() {
    this.slots = [];
  }

  add(slot) {
    this.slots.push(slot);
  }

  delete(slot) {
    this.slots = this.slots.filter(
      (s) => s.start !== slot.start || s.end !== slot.end
    );
  }

  isAvailableSlot(start, end) {
    return !this.slots.some((slot) => slot.start === start && slot.end === end);
  }

  size() {
    return this.slots.length;
  }
}

// Meeting room
// - name: string
// - capacity: number
// - slots: slots
// - availabeleSlots:[];
// - addSlots
// - deleteslots
// - isAvailable
// - setAvailableSlots

class MeetingRoom {
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
    this.slots = new Slots();
    this.availableSlots = [];
  }
  addSlots(slot) {
    this.slots.add(slot);
  }

  deleteSlots(slot) {
    this.slots.delete(slot);
  }

  isAvailable(start, end) {
    return this.slots.isAvailableSlot(start, end);
  }

  setAvailableSlots(slots) {
    this.availableSlots = slots;
  }
}

// Floors
// - name: string
// - meetingRooms: meetingRoom[];
// - addMeetingRoom
// - doesMeetingRoomExist
// - deleteMeetingRoom

class Floor {
  constructor(roomName) {
    this.roomName = roomName;
    this.meetingRooms = [];
  }

  addMeetingRoom(roomName) {
    this.meetingRooms.push(roomName);
  }

  doesMeetingRoomExist(roomName) {
    return this.meetingRooms.some((room) => room.name === roomName);
  }

  deleteMeetingRoom(roomName) {
    this.meetingRooms = this.meetingRooms.filter(
      (room) => room.name !== roomName
    );
  }
}

// Building
// - name
// - floors: floor[]
// - addFloor
// - doesFloorExist
// - deleteFloor

class Building {
  constructor(buildingName) {
    this.buildingName = buildingName;
    this.floors = [];
  }
  this;
  addFloor() {
    this.floors.push(buildingName);
  }
  doesFloorExist(buildingName) {
    return this.floors.some((floor) => floor.name === buildingName);
  }
  deleteFloor() {
    this.floors = this.floors.filter(
      (floor) => floor.buildingName !== buildingName
    );
  }
}
