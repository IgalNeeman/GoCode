import sys
ENTER = "enter"
EXIT = "exit"


def func(stamplist):
    temp_enters, temp_exits = dict(), dict()
    max_time, min_time = -sys.maxsize, sys.maxsize
    # כאן מבוצעת הבדיקה של מי נכנס ויצא ובאיזה זמן
    for Index_stamp in stamplist:
        ts_dict = None
        timestamp = Index_stamp["timestamp"]
        if Index_stamp["type"] == ENTER:
            ts_dict = temp_enters
        else:
            ts_dict = temp_exits
        ts_dict[timestamp] = Index_stamp["count"]
        if timestamp < min_time:
            min_time = timestamp
        elif timestamp > max_time:
            max_time = timestamp
    people_inside = 0
    max_people_inside = 0
    start_time, end_time = None, None
    # כאן אני עובר על טווח הזמנים בעזרת לולאה בשביל לבדוק אם הבן אדם נמצא במקום
    for timestamp in range(min_time, max_time):
        if timestamp in temp_enters:
            people_inside += temp_enters[timestamp]
            # אם הוא נמצא במקום אני סוכם אותו
            if people_inside > max_people_inside:
                max_people_inside = people_inside
                start_time = timestamp
            # אם הבן אדם לא נמצא במקום אני מחסיר אותו
        if timestamp in temp_exits:
            if people_inside == max_people_inside:
                end_time = timestamp
            people_inside -= temp_exits[timestamp]

    return (start_time, end_time)


stamplist = [
    {"timestamp": 1526579928, "count": 3, "type": "enter"},
    {"timestamp": 1526579982, "count": 4, "type": "enter"},
    {"timestamp": 1526580054, "count": 5, "type": "exit"},
    {"timestamp": 1526580128, "count": 1, "type": "enter"},
    {"timestamp": 1526580382, "count": 3, "type": "exit"}
]


#timestamp: (1526579982, 1526580054)

print("timestamp: {} ".format(func(stamplist)))
