class Node:
    def __init__(self, cargo=None, next=None):
        self.cargo = cargo
        self.next = next

    def __str__(self):
        return str(self.cargo)


if __name__ == '__main__':
    import doctest
    doctest.testmod()
