# 이진트리 생성 및 제거, 검색 그리고 순회 (Post, Pre, In, Level)

```
#include <stdio.h>
#include <stdlib.h>
#include <queue>
using namespace std;

struct Node
{
	int data;
	Node* lChild;
	Node* rChild;
};
Node* AllocNode(int data)
{
	Node* n = (Node*)malloc(sizeof(Node));
	n->data = data;
	n->lChild = n->rChild = NULL;
	return n;
}
void _Inorder(Node* p)
{
	if (p)
	{
		_Inorder(p->lChild);
		printf("%d ", p->data);
		_Inorder(p->rChild);
	}
}
void Inorder(Node* root)
{
	printf("Inorder : ");
	_Inorder(root);
	printf("\n");
}
void _Preorder(Node* root)
{
	if (root)
	{
		printf("%d ", root->data);
		_Preorder(root->lChild);
		_Preorder(root->rChild);
	}
}
void Preorder(Node* root)
{
	printf("Preorder : ");
	_Preorder(root);
	printf("\n");
}
void _Postorder(Node* root)
{
	if (root)
	{
		_Postorder(root->lChild);
		_Postorder(root->rChild);
		printf("%d ", root->data);
	}
}
void Postorder(Node* root)
{
	printf("Postorder : ");
	_Postorder(root);
	printf("\n");
}
void Levelorder(Node* root)
{
	if (root == NULL)
		return;

	queue<Node*> q;
	q.push(root);

	printf("Levelorder : ");
	while ( !q.empty() )
	{
		Node* cur = q.front();
		q.pop();
		printf("%d ", cur->data);

		if (cur->lChild)
			q.push(cur->lChild);
		if (cur->rChild)
			q.push(cur->rChild);
	}
	printf("\n");
}
Node* AddNode(Node* root, int key)
{
    if ( root == NULL )
        return AllocNode(key);

    if ( key < root->data )
        root->lChild = AddNode(root->lChild, key);
    else
        root->rChild = AddNode(root->rChild, key);
    return root;
}
Node* SearchNode(Node* root, int key)
{
    if( root == NULL )
        return NULL;
    if( key < root->data )
        return SearchNode(root->lChild, key);
    else if ( key > root->data )
        return SearchNode(root->rChild, key);
    else
        return root;
}
Node* RemoveNode(Node* root, int key)
{
    if (root == NULL)
        return NULL;
    if( key < root->data )
        root->lChild = RemoveNode(root->lChild, key);
    else if( key > root->data)
        root->rChild = RemoveNode(root->rChild, key);
    else
    { // key 찾음
        if( root->lChild == NULL && root->rChild == NULL )
        { // 1. 단말노드
            free(root);
            return NULL;
        }
        else if( root->lChild == NULL && root->rChild != NULL)
        { // 차수 1인 노드 1
            Node* child = root->rChild;
            free(root);
            return child;
        }
        else if( root->lChild != NULL && root->rChild == NULL)
        { // 차수 1인 노드 2
            Node* child = root->lChild;
            free(root);
            return child;
        }
        else
        { // 3. 차수 2인 노드
            Node* p = root->rChild;
            Node* pp = root;
            while (p->lChild)
            {
                pp = p;
                p = p->lChild;
            }
            int deleteKey = p->data;
            root = RemoveNode(root, deleteKey);
            root->data = deleteKey;
            return root;
        }
    }

    return root;
}
void DestroyNode(Node* root)
{
    if (root)
    {
        Node* rChild = root->rChild;
        DestroyNode(root->lChild);
        free(root);
        DestroyNode(rChild);
    }
}
int main()
{
	Node* root = NULL;

    root = AddNode(root, 50);
    AddNode(root, 40);
    AddNode(root, 70);
    AddNode(root, 30);
    AddNode(root, 45);
    AddNode(root, 60);
    AddNode(root, 100);
    AddNode(root, 65);
    AddNode(root, 55);
    AddNode(root, 90);
    AddNode(root, 110);

    root = RemoveNode(root, 45);

	Inorder(root);
	Preorder(root);
	Postorder(root);
	Levelorder(root);

    DestroyNode(root);
}
```

<br>

### 힙 정렬 생성 및 소거 (Heap Sort)

```
#include<stdio.h>
using namespace std;

void PrintList(int list[], int size)
{
    int heapSize = list[0];
    printf("size : %d\n", size);
    if (heapSize != 0)
        printf("[ ");
    for (int i = 1; i <= size; ++i) // 첫번째는 할당번호이므로 비우기
    {
        printf("%5d", list[i]);
        if (heapSize != 0 && i == heapSize)
            printf("] ");
    }
    printf("\n");
}

void Swap(int& a, int& b)
{
   int t = a;
   a = b;
   b = t;
}

void Push_heap(int list[])
{
    int size = ++list[0];

    int child = size;

    while ( child > 1 )
    {
        int parent = child / 2;
        if ( list[parent] < list[child] )
            Swap(list[parent], list[child]);
        else
            break;
        child = parent;
    }
}

void Make_heap(int list[], int size)
{
    for (int i = 0; i < size; ++i)
        Push_heap(list);
}

void Pop_heap(int list[])
{
    Swap(list[1], list[list[0]]); // 끝 leap child와 루트를 바꿈.
    --list[0]; // 끝 leap가 Pop 되었으므로 list number 감소
    int size = list[0];

    int parent = 1;

    while ( parent * 2 <= size )
    {
        int child = parent * 2;
        if ( child < size && list[child] < list[child + 1] )
            child = child + 1;
        if ( list[parent] < list[child] )
            Swap(list[parent], list[child]);
        else
            break;
        parent = child;
    }
}

void Sort_heap(int list[])
{
    int size = list[0];
    for ( int i = 0; i < size; ++i )
        Pop_heap(list);
}

int main()
{
    int list[100] = { 0, 57, 50, 39, 20, 79, 45, 25, 16, 90, 54 };

    PrintList(list, 10);
    Make_heap(list, 10);
    PrintList(list, 10);

    PrintList(list, 10);
    Sort_heap(list);
    PrintList(list, 10);
}
```

공부하다보니까 알고리즘이 점점 재밌어져간다,,