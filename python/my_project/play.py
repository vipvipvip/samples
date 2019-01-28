class Student:
    def __init__(self, name, subjects):
        self.name = name
        self.subjects = subjects

    def getName(self):
        return self.name

    def __str__(self):
        return '({0}, {1})'.format(self.name, repr(self.subjects))

students = [(
    "Alejandro", ["CompSci", "Physics"]),
    ("Justin", ["Math", "CompSci", "Stats"]),
    ("Ed", ["CompSci", "Accounting", "Economics"]),
    ("Margot", ["InfSys", "Accounting", "Economics", "CommLaw"]),
    ("Peter", ["Sociology", "Economics", "Law", "Stats", "Music"])]

allStudents={}

# print all students with a count of their courses.
for (name, subjects) in students:
    allStudents[name]=Student(name, subjects)
    #print('({0}, {1})'.format(name, len(subjects)))
    print(allStudents[name])


class Card:
    SUITS = ('Clubs', 'Diamonds', 'Hearts', 'Spades')
    RANKS = ('narf', 'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King')

    def __init__(self, suit=0, rank=0):
        self.suit = suit
        self.rank = rank

    def __str__(self):
        """
          >>> print(Card(2, 11))
          Queen of Hearts
        """
        return '{0} of {1}'.format(Card.RANKS[self.rank],
                                   Card.SUITS[self.suit])


if __name__ == '__main__':
    import doctest
    doctest.testmod()
