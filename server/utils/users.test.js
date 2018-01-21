const expect = require('expect');
const { Users } = require('./users');



describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Danny',
            room: 'Node Course'
        },
        {
            id: '2',
            name: 'Matt',
            room: 'React Course'
        },
        {
            id: '3',
            name: 'Luke',
            room: 'Node Course'
        }];
    });

    it('should add new user', () => {
        const users = new Users();
        const user = {
            id: '123',
            name: 'Kewal',
            room: 'WS Racing'
        };
        const res = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        const id = '2';
        const res = users.removeUser(id);
        expect(res.id).toBe(id);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        const id = '99';
        const res = users.removeUser(id);
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        const id = '3'; 
        const res = users.getUser(id);
        expect(res.id).toBe(id);
    });

    it('should not find a user', () => {
        const id = '49';
        const res = users.getUser(id);
        expect(res).toBe(undefined);
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');
        expect(userList).toEqual(['Danny', 'Luke'])
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React Course');
        expect(userList).toEqual(['Matt'])
    });
});