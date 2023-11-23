// У цьому завдання вам належить реалізувати сценарій життя, де людина, ключ і будинок взаємодіють один з одним.

// Ключ (Key): Створіть клас Key. У нього має бути одна приватна властивість signature, яка генерується випадково при створенні об'єкта цього класу (наприклад Math.random()). Також цей клас повинен мати метод getSignature, який повертає значення властивості signature.

// Людина (Person): Створіть клас Person. Конструктор цього класу приймає об'єкт класу Key і зберігає їх у приватному властивості key. Клас Person повинен мати метод getKey, який повертає збережений ключ.

// Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true), або закрита (false), і key, яка зберігає об'єкт класу Key. У цьому класі також повинен бути метод comeIn, який додає об'єкт класу Person у масив tenants, якщо door відкрита. Ваш абстрактний клас House також повинен мати абстрактний метод OpenDoor, який приймає об'єкт класу Key.

// Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House. Реалізуйте метод openDoor у цьому класі. Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.

// Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій, в якому людина приходить додому.

class Key {
  constructor(private signature: number) {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }
  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  public abstract OpenDoor(key: Key): boolean;
}

class MyHouse extends House {
  public OpenDoor(key: Key): boolean {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      return true;
    }
    return false;
  }
}

const key = new Key(7);
const house = new MyHouse(key);
const person = new Person(key);
house.OpenDoor(person.getKey());
house.comeIn(person);

export {};
