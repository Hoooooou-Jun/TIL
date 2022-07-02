# 정렬(Sort)

### 선택 정렬 (Selection Sort)

```
#include<stdio.h>
#include<stdlib.h>
#include<time.h>

void PrintList(int list[], int size)
{
    for (int i = 0; i < size; ++i)
        printf("%d ", list[i]);
    printf("\n");
}

void Swap(int& a, int& b)
{
    int t = a;
    a = b;
    b = t;
}

void SelectionSort(int list[], int size)
{
    for (int i = 0; i < size - 1; ++i)
    {
        int minIdx = i;
        for (int j = i + 1; j < size; ++j)
        {
            if (list[minIdx] > list[j])
            {
                minIdx = j;
            }
        }
        Swap(list[i], list[minIdx]);
    }
}

int main()
{
    int list[10] = { 35, 65, 23, 76, 91, 27, 54, 34, 18, 57 };
    PrintList(list, 10);

    SelectionSort(list, 10);
    PrintList(list, 10);
}
```

<Br>

### 삽입 정렬 (Insertion Sort)
```
#include<stdio.h>
#include<stdlib.h>
#include<time.h>

void PrintList(int list[], int size)
{
    for ( int i = 0; i < size; ++i)
        printf("%d ", list[i]);
    printf("\n");
}

void InsertionSort(int list[], int size)
{
    for (int i = 1; i < 10; ++i)
    {
        int curValue = list[i];
        int j = 0;
        for (j = i - 1; j >= 0; --j)
            if (list[j] > curValue)
                list[j+1] = list[j];
            else
                break;
        list[j + 1] = curValue;
    }
}

int main()
{
    int list[10] = { 35, 65, 23, 76, 91, 27, 54, 34, 18, 57 };
    PrintList(list, 10);

    InsertionSort(list, 10);
    PrintList(list, 10);
}
```

<br>

### 버블 정렬 (Bubble Sort)
```
#include<stdio.h>
#include<stdlib.h>
#include<time.h>

void PrintList(int list[], int size)
{
    for (int i = 0; i < size; ++i)
        printf("%d ", list[i]);
    printf("\n");
}

void Swap(int& a, int& b)
{
    int t = a;
    a = b;
    b = t;
}

void BubbleSort(int list[], int size)
{
    for(int i = size - 1; i >= 1; --i)
    {
        for(int j = 0; j < i - 1 ; ++j)
            if (list[j] > list[j + 1])
                Swap(list[j], list[j+1]);
    }
}

int main()
{
    int list[10] = { 35, 65, 23, 76, 91, 27, 54, 34, 18, 57 };
    PrintList(list, 10);

    BubbleSort(list, 10);\
    PrintList(list, 10);
}
```

<br>

### 퀵 정렬 (Quick Sort)

```

void Swap(int& a, int& b)
{
    int t = a;
    a = b;
    b = t;
}

void _QuickSort(int list[], int low, int high)
{
    if ( low <= high )
    {
        int pivot = low;

        int i = pivot + 1;
        int j = high;

        while (i <= j)
        {
            while (list[pivot] > list[i])
                ++i;
            while (list[pivot] < list[j])
                --j;
            if ( i <= j )
                Swap(list[i++], list[j--]);
        }
        Swap(list[pivot], list[j]);

        _QuickSort(list, low, j - 1);
        _QuickSort(list, j + 1, high);
    }
}

void QuickSort(int list[], int size)
{
    _QuickSort(list, 0, size - 1);
}

int main()
{
    int list[10] = { 46, 65, 23, 76, 91, 27, 54, 35, 57, 15 };
    PrintList(list, 10);

    QuickSort(list, 10);
    PrintList(list, 10);
}
```