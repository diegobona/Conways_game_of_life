const patternsArr = {
    pat1: {
        coords: [
            '0:0', '2:0', '3:0', '5:0', '6:0', '8:0', '10:0', '11:0', '13:0', '14:0', '16:0', '18:0', '19:0',
            '0:1', '1:1', '3:1', '5:1', '7:1', '8:1', '9:1', '11:1', '13:1', '15:1', '16:1', '18:1',
            '3:2', '5:2', '11:2', '13:2', '19:2',
            '0:3', '1:3', '3:3', '5:3', '6:3', '7:3', '8:3', '9:3', '10:3', '12:3', '14:3', '15:3', '16:3', '17:3', '18:3', '19:3',
            '1:4', '3:4', '10:4', '12:4', '14:4',
            '0:5', '3:5', '4:5', '5:5', '6:5', '7:5', '8:5', '10:5', '12:5', '14:5', '16:5', '17:5', '18:5', '19:5',
            '0:6', '1:6', '2:6', '8:6', '10:6', '12:6', '14:6', '16:6', '19:6',
            '3:7', '4:7', '5:7', '6:7', '8:7', '10:7', '12:7', '14:7', '16:7', '18:7',
            '0:8', '1:8', '2:8', '6:8', '8:8', '10:8', '12:8', '14:8', '16:8', '18:8', '19:8',
            '0:9', '3:9', '4:9', '6:9', '8:9', '10:9', '12:9', '14:9', '16:9', '18:9',
            '1:10', '3:10', '5:10', '7:10', '9:10', '11:10', '13:10', '14:10', '16:10', '19:10',
            '0:11', '1:11', '3:11', '5:11', '7:11', '9:11', '11:11', '16:11', '17:11', '18:11', '19:11',
            '1:12', '3:12', '5:12', '7:12', '9:12', '11:12', '12:12', '13:12', '14:12', '15:12',
            '0:13', '3:13', '5:13', '7:13', '9:13', '16:13', '17:13', '18:13', '19:13',
            '0:14', '1:14', '2:14', '3:14', '5:14', '7:14', '9:14', '10:14', '11:14', '12:14', '13:14', '14:14', '16:14', '19:14',
            '5:15', '7:15', '14:15', '16:15', '18:15',
            '0:16', '1:16', '2:16', '3:16', '4:16', '5:16', '7:16', '8:16', '9:16', '10:16', '11:16', '12:16', '14:16', '16:16', '18:16', '19:16',
            '0:17', '6:17', '12:17', '14:17', '16:17', '18:17',
            '1:18', '3:18', '4:18', '6:18', '8:18', '9:18', '10:18', '12:18', '14:18', '16:18', '19:18',
            '0:19', '1:19', '3:19', '4:19', '6:19', '7:19', '9:19', '11:19', '12:19', '14:19', '15:19', '18:19', '19:19'
        ],
        size: 22,
        text: '20x20 maximum-density still life'
    },
    pat2: {
        coords: ["1:6", "2:5", "2:6", "2:7", "3:3", "3:4", "3:5", "3:7", "3:8", "3:9", "4:3", "4:9", "5:2", "5:3", "5:9", "5:10", "6:1", "6:2", "6:10", "6:11", "7:2", "7:3", "7:9", "7:10", "8:3", "8:9", "9:3", "9:4", "9:5", "9:7", "9:8", "9:9", "10:5", "10:6", "10:7", "11:6"],
        minSize: 15,
        text: 'Star, period 3'
    },
    pat3: {
        coords: [
            "3:1", "4:1", "5:1", "3:2", "6:1", "6:2", "3:3", "6:3", "1:3", "2:3", "7:3", "8:4", "8:3", "1:4", "1:5", "1:6", "2:6", "7:6", "8:6", "8:5", "3:6", "6:6", "6:7", "6:8", "5:8", "4:8", "3:8", "3:7"
        ],
        minSize: 10,
        text: 'Cross, period 3'
    },
    pat4: {
        coords: [
            "0:9", "1:9", "1:8", "1:7", "2:6", "3:7", "4:7", "5:6", "5:5", "4:5", "4:4", "3:4", "3:3", "4:2", "5:2", "6:3", "7:2", "7:1", "7:0", "8:0"
        ],
        minSize: 10,
        text: 'French kiss, period 3'
    },
    pat5: {
        coords: [
            "6:0", "7:0", "7:1", "6:1", "0:4", "1:4", "1:5", "0:5", "10:6", "11:6", "10:7", "11:7", "4:11", "4:10", "5:11", "5:10", "3:4", "3:5", "3:6", "3:7", "4:8", "5:8", "6:8", "7:8", "8:7", "8:4", "8:6", "8:5", "4:3", "5:3", "6:3", "7:3", "4:5", "5:6", "6:6"
        ],
        minSize: 12,
        text: 'Clock 2, period 4'
    },
    pat6: {
        coords: [
            "0:2", "0:5", "2:0", "2:7", "5:7", "7:5", "7:2", "1:2", "1:5", "2:6", "5:6", "6:5", "6:2", "5:1", "5:0", "2:1", "3:5", "4:5", "2:4", "2:3", "5:3", "5:4", "3:2", "4:2"
        ],
        minSize: 9,
        text: 'Octagon, period 5'
    },
    pat7: {
        coords: [
            "3:1", "4:1", "1:2", "1:3", "1:4", "6:2", "6:3", "6:4", "2:5", "2:6", "1:7", "0:7", "0:6", "5:5", "5:6", "6:7", "7:7", "7:6"
        ],
        minSize: 9,
        text: 'Fumarole, period 5'
    },
    pat8: {
        coords: [
            "4:3", "4:4", "3:4", "3:5", "7:3", "6:3", "6:4", "7:4", "9:3", "10:3", "10:4", "11:4", "11:6", "10:6", "10:7", "11:7", "11:9", "11:10", "10:10", "10:11", "8:11", "8:10", "7:10", "7:11", "5:11", "4:11", "4:10", "3:10", "3:8", "4:8", "4:7", "3:7"
        ],
        minSize: 15,
        text: 'Kok\'s galaxy, period 8'
    },
    pat9: {
        coords: [
            "1:5", "2:5", "1:6", "2:6", "11:6", "11:5", "11:7", "12:8", "13:9", "14:9", "16:8", "17:7", "17:6", "18:6", "15:6", "17:5", "16:4", "12:4", "13:3", "14:3", "21:5", "22:5", "22:4", "21:4", "21:3", "22:3", "23:6", "23:2", "25:6", "25:7", "25:2", "25:1", "35:3", "36:3", "35:4", "36:4"
        ],
        minSize: 38,
        text: 'Gosper glider gun'
    },
    pat10: {
        coords: [
            "1:5", "2:5", "1:6", "2:6", "11:6", "11:5", "11:7", "12:8", "13:9", "14:9", "16:8", "17:7", "17:6", "18:6", "15:6", "17:5", "16:4", "12:4", "13:3", "14:3", "21:5", "22:5", "22:4", "21:4", "21:3", "22:3", "23:6", "23:2", "25:6", "25:7", "25:2", "25:1", "35:3", "36:3", "35:4", "36:4", "35:16", "35:18", "33:17", "34:17", "36:17", "37:17", "38:17", "39:17", "40:18", "40:16", "41:17", "42:17"
        ],
        minSize: 47,
        text: 'Glider gun and pentadecathlon'
    }
};
const patterns = {};
for (let name in patternsArr) {
  patterns[name] = {};
  for (let coord of patternsArr[name].coords) {
    patterns[name][coord] = true;
  }
}

export { patternsArr, patterns };